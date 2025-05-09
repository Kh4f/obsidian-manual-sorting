import { TFolder } from 'obsidian';
import { FileOrder } from './types';
import ManualSortingPlugin from './main';


export class FileOrderManager {

	constructor(private _plugin: ManualSortingPlugin) {}

	resetOrder() {
		this._plugin.settings.customFileOrder = {"/": []};
		this._plugin.saveSettings();
	}

	async updateOrder() {
		console.log("Updating order...");
		const currentOrder = await this._getCurrentOrder();
		const savedOrder = this._plugin.settings.customFileOrder;
		const newOrder = await this._matchSavedOrder(currentOrder, savedOrder);
		this._plugin.settings.customFileOrder = newOrder;
		this._plugin.saveSettings();
		console.log("Order updated:", this._plugin.settings.customFileOrder);
	}

    private async _getCurrentOrder() {
		const currentData: { [folderPath: string]: string[] } = {};
		const explorerView = this._plugin.getFileExplorerView();

        const indexFolder = (folder: TFolder) => {
            const sortedItems = explorerView.getSortedFolderItems(folder);
            const sortedItemPaths = sortedItems.map((item) => item.file.path);
            currentData[folder.path] = sortedItemPaths;

            for (const item of sortedItems) {
                const itemObject = item.file;
                if (itemObject instanceof TFolder) {
                    indexFolder(itemObject);
                }
            }
        };

        indexFolder(this._plugin.app.vault.root);
        return currentData;
    }

	private async _matchSavedOrder(currentOrder: FileOrder, savedOrder: FileOrder) {
		let result: FileOrder = {};

		for (let folder in currentOrder) {
			if (savedOrder[folder]) {
				let prevOrder = savedOrder[folder];
				let currentFiles = currentOrder[folder];
				// Leave the files that have already been saved
				let existingFiles = prevOrder.filter(file => currentFiles.includes(file));
				// Add new files to the beginning of the list
				let newFiles = currentFiles.filter(file => !prevOrder.includes(file));
				// Combine and remove duplicates
				result[folder] = Array.from(new Set([...newFiles, ...existingFiles]));
			} else {
				// Remove duplicates from current folder
				result[folder] = Array.from(new Set(currentOrder[folder]));
			}
		}

		return result;
	}

	async moveFile(oldPath: string, newPath: string, newDraggbleIndex: number) {
		console.log(`Moving from "${oldPath}" to "${newPath}" at index ${newDraggbleIndex}`);
		const data = this._plugin.settings.customFileOrder;
		const oldDir = oldPath.substring(0, oldPath.lastIndexOf("/")) || "/";
		const newDir = newPath.substring(0, newPath.lastIndexOf("/")) || "/";

		if (data[oldDir]) {
			data[oldDir] = data[oldDir].filter((path: string) => path !== oldPath);
		} else {
			console.warn(`[moveFile] folder "${oldDir}" not found in data.`);
		}

		if (data[newDir].includes(newPath)) {
			console.warn(`[moveFile] "${newPath}" already exists in "${newDir}". Removing it from "${oldDir}" and returning.`);
			return;
		}

		data[newDir].splice(newDraggbleIndex, 0, newPath);

		this._plugin.saveSettings();
	}

	async renameItem(oldPath: string, newPath: string) {
		if (oldPath === newPath) return;
		console.log(`Renaming "${oldPath}" to "${newPath}"`);
		const data = this._plugin.settings.customFileOrder;
		const oldDir = oldPath.substring(0, oldPath.lastIndexOf("/")) || "/";

		if (data[oldDir]) {
			data[oldDir] = data[oldDir].map((path: string) => (path === oldPath ? newPath : path));
		} else {
			console.warn(`[renameItem] folder "${oldDir}" not found in data.`);
		}

		const itemIsFolder = !!data[oldPath];
		if (itemIsFolder) {
			console.log(`[renameItem] "${oldPath}" is a folder. Renaming its children as well.`);
			data[newPath] = data[oldPath];
			delete data[oldPath];
			data[newPath] = data[newPath].map((path: string) => path.replace(oldPath, newPath));
		}

		this._plugin.saveSettings();
	}

	async restoreOrder(container: Element, folderPath: string) {
		const savedData = this._plugin.settings.customFileOrder;
		console.log(`Restoring order for "${folderPath}"`);
		const savedOrder = savedData?.[folderPath];
		if (!savedOrder) return;

		const explorer = await this._plugin.waitForExplorer();
		const scrollTop = explorer.scrollTop;

		const itemsByPath = new Map<string, Element>();
		Array.from(container.children).forEach((child: Element) => {
			const path = child.firstElementChild?.getAttribute("data-path");
			if (path) {
				itemsByPath.set(path, child);
			}
		});

		const fragment = document.createDocumentFragment();
		savedOrder.forEach((path: string) => {
			const element = itemsByPath.get(path);
			if (element) {
				fragment.appendChild(element);
			}
		});

		container.appendChild(fragment);
		explorer.scrollTop = scrollTop;
		console.log(`Order restored for "${folderPath}"`);
	}

	getFlattenPaths() {
		function flattenPaths(obj: { [key: string]: string[] }, path: string = "/"): string[] {
			let result = [];
			
			if (obj[path]) {
				for (const item of obj[path]) {
					result.push(item);
					if (obj[item]) {
						result.push(...flattenPaths(obj, item));
					}
				}
			}
			return result;
		}

		return flattenPaths(this._plugin.settings.customFileOrder);
	}
}

