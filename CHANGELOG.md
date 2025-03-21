# Changelog


### [1.10.2](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.10.1...1.10.2) (2025-03-21)


### 🩹 Bug Fixes

* **compatibility:** add custom chosenClass and ghostClass to resolve cMenu plugin conflict ([26c0567](https://github.com/Kh4f/obsidian-manual-sorting/commit/26c0567a743cf8468358b6ff7765c3d89900016f)), closes [#21](https://github.com/Kh4f/obsidian-manual-sorting/issues/21) [#24](https://github.com/Kh4f/obsidian-manual-sorting/issues/24)

### [1.10.1](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.10.0...1.10.1) (2025-03-21)


### 🩹 Bug Fixes

* **mobile:** add delay before drag starts to prevent accidental reordering during scroll ([6938ce6](https://github.com/Kh4f/obsidian-manual-sorting/commit/6938ce6e5a8560729017f12417bf7c2ea9887866)), closes [#24](https://github.com/Kh4f/obsidian-manual-sorting/issues/24)

## [1.10.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.9.3...1.10.0) (2025-03-20)


### 🚀 Features

* add new files/folders to the beginning of the directory instead of the end ([c8c6045](https://github.com/Kh4f/obsidian-manual-sorting/commit/c8c6045214c808c48b99b560f5302c6d0458505e))

### [1.9.3](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.9.2...1.9.3) (2025-03-20)


### 🩹 Bug Fixes

* preserve rename mode for manually created folders by skipping order restoration ([1934e85](https://github.com/Kh4f/obsidian-manual-sorting/commit/1934e85dcb00704baac1027325569149e0da14de)), closes [#23](https://github.com/Kh4f/obsidian-manual-sorting/issues/23)


### 🧹 Adjustments

* **debug:** add log message for order updates ([8660eef](https://github.com/Kh4f/obsidian-manual-sorting/commit/8660eefde343028da802e52025283e29ee3dbffd))

### [1.9.2](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.9.1...1.9.2) (2025-03-19)


### 🩹 Bug Fixes

* **ui:** apply margin-bottom style only to non-tree-item elements ([5d477d4](https://github.com/Kh4f/obsidian-manual-sorting/commit/5d477d426ecf1e4a42da091e6effec1f9d1d8678)), closes [#22](https://github.com/Kh4f/obsidian-manual-sorting/issues/22)

### [1.9.1](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.9.0...1.9.1) (2025-03-17)


### ⚡ Performance

* remove await before enabling Folder Notes plugin in reloadExplorerPlugin ([0207f62](https://github.com/Kh4f/obsidian-manual-sorting/commit/0207f62c3457b4735370499e4f3349671d2f9fe8))


### 🧹 Adjustments

* add console log for File Explorer plugin reloaded ([29b7f24](https://github.com/Kh4f/obsidian-manual-sorting/commit/29b7f245826333c06dcf3ff634ca026357ed6a14))
* combine patches for the same class into a single around function ([3dcb705](https://github.com/Kh4f/obsidian-manual-sorting/commit/3dcb705a16cf10bd8e468f2a7ed5a2b7706c0715))
* move `main.ts` to `src` folder and update `entryPoints` in `esbuild.config.mjs` ([9780d12](https://github.com/Kh4f/obsidian-manual-sorting/commit/9780d12128177f4fe9e582731780092e40e286cd))
* move `OrderManager` class to a separate file ([e23bb85](https://github.com/Kh4f/obsidian-manual-sorting/commit/e23bb8570f4d3e909a78a48231a8c49c7514d681))
* move `ResetOrderConfirmationModal` class to a separate file ([dd0df38](https://github.com/Kh4f/obsidian-manual-sorting/commit/dd0df38423837d925a5e3742fb11c1abce2fdad1))
* move `waitForExplorer` function inside `patchFileExplorer` ([42ada4e](https://github.com/Kh4f/obsidian-manual-sorting/commit/42ada4eb354dc29b22e4b3bdeb870ee9bcd9a342))
* move console log for reloading Folder Notes plugin to the top ([6aa0c2c](https://github.com/Kh4f/obsidian-manual-sorting/commit/6aa0c2c44b6b264037f3e45dac4b2df2c8de5bd2))
* move i18next type declaration to types.d.ts ([d2e261e](https://github.com/Kh4f/obsidian-manual-sorting/commit/d2e261e7b0fa64e5a29afe2a87707c375ec8b662))
* **order-manager:** make `cachedData` private ([3ebf6c6](https://github.com/Kh4f/obsidian-manual-sorting/commit/3ebf6c653376060920e4861de67f7e523dfd7434))
* remove `await` from `reloadExplorerPlugin` call in `initialize` ([526a98c](https://github.com/Kh4f/obsidian-manual-sorting/commit/526a98cac4f1a6923ba5d23b24772dc0185427b8))
* remove `deleteItem` function in `OrderManager` and replace its calls with `updateOrder` ([1e98b0d](https://github.com/Kh4f/obsidian-manual-sorting/commit/1e98b0d73a0ac99733e2c5d0a3c1d823411e44e6))
* remove `reloadFolderNotesPlugin` and inline its content into `reloadExplorerPlugin` ([1ad2c31](https://github.com/Kh4f/obsidian-manual-sorting/commit/1ad2c31031f8b462a7f2a0f1c1a4a72733cc1740))
* remove unnecessary .npmrc file ([ccfa3b1](https://github.com/Kh4f/obsidian-manual-sorting/commit/ccfa3b133b727c9a9b32dfb48cfaeca9f32c4fd2))
* rename `explorerPatches` to `explorerUnpatchFunctions` for clarity ([ea79ea7](https://github.com/Kh4f/obsidian-manual-sorting/commit/ea79ea7f7cd72ff03ec1e5786a6e315fca543184))
* replace `debugLog` function with esbuild `drop` configuration ([aa89b97](https://github.com/Kh4f/obsidian-manual-sorting/commit/aa89b97897715a4f2746a269efec7fefb42af52c))
* **types:** import only type from i18next ([99d9b0c](https://github.com/Kh4f/obsidian-manual-sorting/commit/99d9b0cc98fe3fdcdc7aba6ddb36e23018f6e13c))

## [1.9.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.8.2...1.9.0) (2025-03-15)


### 🚀 Features

* **order-manager:** add caching ([aaed1ee](https://github.com/Kh4f/obsidian-manual-sorting/commit/aaed1eee683f40d24f1fa5b75635c69b294b904d))
* **order-manager:** add getFlattenPaths method to retrieve all paths in a single array ([af1991c](https://github.com/Kh4f/obsidian-manual-sorting/commit/af1991c1dc5726e36e28495775e13b08ec3fde78))


### 🩹 Bug Fixes

* ensure correct selection range after reordering by patching `handleItemSelection` ([1b69a9e](https://github.com/Kh4f/obsidian-manual-sorting/commit/1b69a9ec842d2a57cf33acb426f1446da66480ab)), closes [#16](https://github.com/Kh4f/obsidian-manual-sorting/issues/16)
* prevent patching `detach` and `setFocusedItem` when manual sorting is disabled ([0deb1eb](https://github.com/Kh4f/obsidian-manual-sorting/commit/0deb1ebe566e55711e62056de785529fdccada2f))


### 🧹 Adjustments

* **order-manager:** make _queueOperation generic to support different return types ([adbf3d2](https://github.com/Kh4f/obsidian-manual-sorting/commit/adbf3d28fbfe6d973d43fc1dd95cf10d6c395d7e))

### [1.8.2](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.8.1...1.8.2) (2025-03-13)


### 🩹 Bug Fixes

* prevent scrolling when right-clicking an item by patching setFocusedItem ([8d61c6b](https://github.com/Kh4f/obsidian-manual-sorting/commit/8d61c6bf1eb640741f9d5000035bce5a57bcf022)), closes [#18](https://github.com/Kh4f/obsidian-manual-sorting/issues/18)
* **debug:** update debug log message to reference itemContainer directly ([ba7ca59](https://github.com/Kh4f/obsidian-manual-sorting/commit/ba7ca591da2d3dec9d1d177864f09aa0681c58e5))


### 🧹 Adjustments

* **revert:** fix(ui): adjust animation speed for smoother transition ([b5e5726](https://github.com/Kh4f/obsidian-manual-sorting/commit/b5e5726aa290219244221a886ed9e0e8c3acc2dc))
* **package.json:** add separate scripts for version bumping and tagging, remove version script ([e4ef759](https://github.com/Kh4f/obsidian-manual-sorting/commit/e4ef75939efbe944575c2c1091ab5a5f4f7592a5))
* **versionrc:** update postcommit and pretag scripts ([c52f548](https://github.com/Kh4f/obsidian-manual-sorting/commit/c52f5483fcbc3fe78c610e942eae5a4fb57b66b2))
* **versionrc:** update section labels ([943c09f](https://github.com/Kh4f/obsidian-manual-sorting/commit/943c09febfffa5df7225ce4d46167fd410868b06))

### [1.8.1](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.8.0...1.8.1) (2025-03-10)


### 🛠️ Changes

* remove unused code for fetching all folders ([f1e10ef](https://github.com/Kh4f/obsidian-manual-sorting/commit/f1e10ef85022d97d18d6ff2ae02124e552d2dd66))


### 🐞 Bug Fixes

* **compatibility:** add reload for Folder Notes plugin to resolve conflict ([ec48f17](https://github.com/Kh4f/obsidian-manual-sorting/commit/ec48f17ba7a3e6c1707cc6e2340c11464ed5f672)), closes [#11](https://github.com/Kh4f/obsidian-manual-sorting/issues/11)

## [1.8.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.7.4...1.8.0) (2025-03-10)


### 🐞 Bug Fixes

* **ui:** adjust animation speed for smoother transition ([31d355d](https://github.com/Kh4f/obsidian-manual-sorting/commit/31d355d3d530d81bec4644457944254f85e5efd0))


### 🛠️ Changes

* remove update and restore order logic based on rendered elements count ([cd66353](https://github.com/Kh4f/obsidian-manual-sorting/commit/cd66353fd1924462186ccd1b4530f33e78dc119a))


### 🚀 Features

* add restoreOrder call after moving an element ([cdb7044](https://github.com/Kh4f/obsidian-manual-sorting/commit/cdb7044a84e97e087c225ae9f5534e7b17a85a20))
* ensure ui matches saved order by calling updateVirtualDisplay in updateOrder ([ca9083b](https://github.com/Kh4f/obsidian-manual-sorting/commit/ca9083b2b67d59a1493ca6dc2f7a49e804e8e8a2))

### [1.7.4](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.7.3...1.7.4) (2025-03-09)


### 🐞 Bug Fixes

* ensure patched setChildrenInPlace runs only for items inside file explorer ([6613c48](https://github.com/Kh4f/obsidian-manual-sorting/commit/6613c481e1324aa4b1a26c438a7727c180f6c70a)), closes [#15](https://github.com/Kh4f/obsidian-manual-sorting/issues/15)

### [1.7.3](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.7.2...1.7.3) (2025-03-09)


### 🐞 Bug Fixes

* resolve issue with incorrect destinationPath when moving folders after hover callout ([4fae11f](https://github.com/Kh4f/obsidian-manual-sorting/commit/4fae11f05e09ef593ceff87406f6519df2352231))

### [1.7.2](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.7.1...1.7.2) (2025-03-09)


### 🐞 Bug Fixes

* **desktop:** resolve issue where item does not move when releasing mouse after hover callout ([ffc6e1b](https://github.com/Kh4f/obsidian-manual-sorting/commit/ffc6e1b3b5e7d8435b3116941fd4f44f15ca208b))

### [1.7.1](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.7.0...1.7.1) (2025-03-09)


### 🐞 Bug Fixes

* **ui:** fix cursor stuck in "grabbing" state when releasing mouse outside file explorer ([0c03d2a](https://github.com/Kh4f/obsidian-manual-sorting/commit/0c03d2a8376022a608e3e99d3bb0b13e88d36220)), closes [#9](https://github.com/Kh4f/obsidian-manual-sorting/issues/9)

## [1.7.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.6.1...1.7.0) (2025-03-09)


### 🚀 Features

* **drag-n-drop:** automatically collapse folder when dragging ([d1b0730](https://github.com/Kh4f/obsidian-manual-sorting/commit/d1b07303d4b2f2085e071a57bcad7e452a5a0266)), closes [#13](https://github.com/Kh4f/obsidian-manual-sorting/issues/13)

### [1.6.1](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.6.0...1.6.1) (2025-03-09)


### 🐞 Bug Fixes

* **ui:** further reduce large empty gaps between file structure elements ([ce08b0f](https://github.com/Kh4f/obsidian-manual-sorting/commit/ce08b0fbe9f23b2b7e9cb5b536a3ac90ad612531)), closes [#7](https://github.com/Kh4f/obsidian-manual-sorting/issues/7)

## [1.6.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.5.0...1.6.0) (2025-03-09)


### 🚀 Features

* add waitForExplorer method to ensure file explorer is loaded before patching ([10d460f](https://github.com/Kh4f/obsidian-manual-sorting/commit/10d460f3237f572624d753a0f4ed64f6d08486fe))
* enable plugin for mobile devices ([3f08a57](https://github.com/Kh4f/obsidian-manual-sorting/commit/3f08a5727479f34ade1c5e39b75a2d321baf92b1))
* manually trigger file renaming after moving between directories ([e9f94d8](https://github.com/Kh4f/obsidian-manual-sorting/commit/e9f94d88e86cda357feba63d729798a7bbd86355))

## [1.5.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.4.0...1.5.0) (2025-03-08)


### 🐞 Bug Fixes

* add optional chaining to prevent errors when accessing nextItem's firstChild ([a23b662](https://github.com/Kh4f/obsidian-manual-sorting/commit/a23b66289a97b9e977970a250b995f88ffcf75ef))
* **debug:** correct debug message from 'after' to 'before' ([e796833](https://github.com/Kh4f/obsidian-manual-sorting/commit/e796833f7c84c477456ae80c56084e72d9e94e8e))


### 🚀 Features

* **drag-and-drop:** prevent folder from moving when dragging item over it by adding swapThreshold ([de043d1](https://github.com/Kh4f/obsidian-manual-sorting/commit/de043d133389c51b5d0e6c6502fa8d2d903464ee)), closes [#10](https://github.com/Kh4f/obsidian-manual-sorting/issues/10)

## [1.4.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.3.7...1.4.0) (2025-03-08)


### 🚀 Features

* **order-manager:** rewrite OrderManager to index entire file structure and seamlessly update order after external changes ([786f924](https://github.com/Kh4f/obsidian-manual-sorting/commit/786f924bccb86ef647e899d4002189389deaa5e1))


### 🛠️ Changes

* replace itemInstance?.children with itemIsFolder variable ([752e70d](https://github.com/Kh4f/obsidian-manual-sorting/commit/752e70d1bb223cc44a83a1728f785c8b7e433494))


### 🐞 Bug Fixes

* ensure files are truly deleted before updating order ([29f5b71](https://github.com/Kh4f/obsidian-manual-sorting/commit/29f5b7128463fba201448a7dab082c439c087bea))
* **menu:** correct variable name from 'openManuButton' to 'openMenuButton' ([f8385d5](https://github.com/Kh4f/obsidian-manual-sorting/commit/f8385d52ddc935bb17ddcbdbdb021cba92a19d1a))
* override detach function to prevent deletion of offscreen files ([f296b9e](https://github.com/Kh4f/obsidian-manual-sorting/commit/f296b9e68c32268df654878544d777cf25e177c8))
* **ui:** reduce large empty gaps between file structure elements ([b1ab442](https://github.com/Kh4f/obsidian-manual-sorting/commit/b1ab4424021aacf34e40ca1cf0790dbe6058f623))

### [1.3.7](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.3.6...1.3.7) (2025-03-06)


### 🐞 Bug Fixes

* **menu:** ensure "Change sort order" click handler only applies in File Explorer ([a90690e](https://github.com/Kh4f/obsidian-manual-sorting/commit/a90690eabb5d8299b88de063aa6f7122954a4711)), closes [#6](https://github.com/Kh4f/obsidian-manual-sorting/issues/6)

### [1.3.6](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.3.5...1.3.6) (2025-02-28)


### 🐞 Bug Fixes

* **ui:** change modal title to sentence case ([cb2ec6c](https://github.com/Kh4f/obsidian-manual-sorting/commit/cb2ec6c2108bdd128464ea9fedf8f83f96ef682a))


### 🛠️ Changes

* **license:** update copyright year and owner ([fbb6e76](https://github.com/Kh4f/obsidian-manual-sorting/commit/fbb6e762d294d636182c9a2179508547a5bde1fb))
* replace outdated layout ready check with modern approach ([82f2951](https://github.com/Kh4f/obsidian-manual-sorting/commit/82f2951ce72b0235f49a59a94539e6e54437987e))

### [1.3.5](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.3.4...1.3.5) (2025-02-15)


### 🛠️ Changes

* **dependencies:** add i18next and update @babel/runtime ([17dc880](https://github.com/Kh4f/obsidian-manual-sorting/commit/17dc8808b431cdea7494c927488f5edcdcfefe67))
* **manifest.json:** set isDesktopOnly to true ([f200866](https://github.com/Kh4f/obsidian-manual-sorting/commit/f200866d8433d7599032858852a1a80d64109171))

### [1.3.4](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.3.3...1.3.4) (2025-02-12)


### 🛠️ Changes

* add refactor and chore sections to .versionrc ([888c7c6](https://github.com/Kh4f/obsidian-manual-sorting/commit/888c7c6742280b5e87da3586c76c83d2c51f8936))
* update devDependencies to latest versions ([541c609](https://github.com/Kh4f/obsidian-manual-sorting/commit/541c609d36410c36a66afafc4810c69ca5a89ec2))


### 🐞 Bug Fixes

* **mobile:** tree.infinityScroll not found that lead to a crash by [<u>**@Mara-Li**</u>](https://github.com/Mara-Li) in [#3](https://github.com/Kh4f/obsidian-manual-sorting/pull/3) ([7b369fb](https://github.com/Kh4f/obsidian-manual-sorting/commit/7b369fb5f77131c0febd9e43ce1965a6e1b7b694))
* not working in french by [<u>**@Mara-Li**</u>](https://github.com/Mara-Li) in [#2](https://github.com/Kh4f/obsidian-manual-sorting/pull/2) ([ebb4e5d](https://github.com/Kh4f/obsidian-manual-sorting/commit/ebb4e5d9bfccb3e2b46fb283a6a0b5a3c5b8834f)), closes [#1](https://github.com/Kh4f/obsidian-manual-sorting/issues/1)

### [1.3.3](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.3.2...1.3.3) (2025-02-12)


### 🛠️ Changes

* include styles.css in release workflow ([b115fff](https://github.com/Kh4f/obsidian-manual-sorting/commit/b115fff55363c10487f8f571e209a7f0f412b143))
* move modal button styles into CSS ([1a20f9e](https://github.com/Kh4f/obsidian-manual-sorting/commit/1a20f9e092d7361f00e25785f2d913bc04906dfc))

### [1.3.2](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.3.1...1.3.2) (2025-02-11)

### 🛠️ Changes
- update plugin ID in `manifest.json` ([d374551](https://github.com/Kh4f/obsidian-manual-sorting/commit/d37455194018310698f9a054d5b42bf7c54e0830))

### [1.3.1](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.3.0...1.3.1) (2025-02-11)

### 🛠️ Changes
- update description for clarity in `manifest.json` ([364117b](https://github.com/Kh4f/obsidian-manual-sorting/commit/364117beb82ab53f512565aed4a0c4364984a660))

## [1.3.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.2.0...1.3.0) (2025-02-10)


### 🚀 Features

* **menu:** add emojis to custom menu options ([ce51167](https://github.com/Kh4f/obsidian-manual-sorting/commit/ce511674f982c653228e5945eca7e9a9ff36549e))


### 🐞 Bug Fixes

* add optional chaining to prevent potential null reference errors ([8c64d67](https://github.com/Kh4f/obsidian-manual-sorting/commit/8c64d679266c38036fc26e861b2011571f81584b))
* add type annotations for better type safety in menu and sorting logic ([a3d0847](https://github.com/Kh4f/obsidian-manual-sorting/commit/a3d0847d9034049c833e0a1dc4293f6eb7395676))
* replace direct prototype access with Object.getPrototypeOf for better compatibility ([d33bf5e](https://github.com/Kh4f/obsidian-manual-sorting/commit/d33bf5ece069a14475663020932e11295cba2536))

## [1.2.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.1.0...1.2.0) (2025-02-10)


### 🚀 Features

* add 'Reset order' option to Obsidian Sort Order menu for clearing saved data ([0b095b6](https://github.com/Kh4f/obsidian-manual-sorting/commit/0b095b6a772ec32267be30f29f98cf268dff87a7))
* add confirmation modal for resetting sort order to default ([01ed06e](https://github.com/Kh4f/obsidian-manual-sorting/commit/01ed06e04b33f69bf81b24c2161e6ab30f1d5d7f))
* conditionally add 'Reset order' option to sorting menu based on manual sorting status ([19c2253](https://github.com/Kh4f/obsidian-manual-sorting/commit/19c2253af5fa5b0b4098ce8bedc46a61219b33f0))


### 🐞 Bug Fixes

* correct small spacing between buttons in confirmation modal ([fc80c2d](https://github.com/Kh4f/obsidian-manual-sorting/commit/fc80c2d0487c459011ec7dcf313a2d683ae747da))

## [1.1.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/1.0.0...1.1.0) (2025-02-10)


### 🚀 Features

* add custom option for manual sorting in Sort Order menu ([7583173](https://github.com/Kh4f/obsidian-manual-sorting/commit/7583173670746020e5d76eb0c5f210a0416eb755))
* add enable/disable functionality for custom option ([05628ec](https://github.com/Kh4f/obsidian-manual-sorting/commit/05628ec49c65bfd18891dd0dfb099d6d2f99c702))
* add unpatching functionality for sort order menu on unload ([b3ff25e](https://github.com/Kh4f/obsidian-manual-sorting/commit/b3ff25eedb49f10ef0890e993bdac1b542c4a959))
* enhance initialization process by patching sort order menu and cleaning up invalid paths ([7be74d5](https://github.com/Kh4f/obsidian-manual-sorting/commit/7be74d5622678394e7d67bd4e2f012e769a145c9))
* update manual sorting menu option to reflect enabled state and reload plugin on activation ([a850371](https://github.com/Kh4f/obsidian-manual-sorting/commit/a850371225ec575a9d3f462f4f1fbaaee47d0f73))

### 🐞 Bug Fixes

* disable manual sorting when selecting another sort option ([bf987d0](https://github.com/Kh4f/obsidian-manual-sorting/commit/bf987d09776cba549904e14e10f8bbc0794a094a))

## [1.0.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/0.2.0...1.0.0) (2025-02-10)


### 🚀 Features

* add unpatching functionality for file explorer on unload ([7d51c21](https://github.com/Kh4f/obsidian-manual-sorting/commit/7d51c2138749d92425df9b07808601bb1d35d827))

## [0.2.0](https://github.com/Kh4f/obsidian-manual-sorting/compare/0.1.0...0.2.0) (2025-02-10)


### 🚀 Features

* add allChildrenRendered flag to TFolder for rendering tracking ([3032919](https://github.com/Kh4f/obsidian-manual-sorting/commit/3032919494f847498a9f73a5a25ca4784e0dd675))
* add onEnd handler  for order saving on drag end ([7156d4d](https://github.com/Kh4f/obsidian-manual-sorting/commit/7156d4df26ac3275fa798792fbf1e747674aa739))
* add onRename handler to save order after renaming items ([c24a172](https://github.com/Kh4f/obsidian-manual-sorting/commit/c24a1726ca66a6086dca8ca2ae213945f4cd014f))
* add prevActualChildrenCount to TFolder for tracking child count changes ([1eb4939](https://github.com/Kh4f/obsidian-manual-sorting/commit/1eb49392f234b12f3a38a2b54960dc73d6574729))
* add reloadExplorerPlugin method to refresh file explorer state ([85cb1c4](https://github.com/Kh4f/obsidian-manual-sorting/commit/85cb1c4d2de1988664d2553d344d44c7a34130b3))
* enhance OrderManager to handle concurrent save operations with a queue ([b41003c](https://github.com/Kh4f/obsidian-manual-sorting/commit/b41003cd568e7c2e5e1ea1a37f2e4a3b55fbf29d))
* implement OrderManager for saving and restoring item order in containers ([71fc89b](https://github.com/Kh4f/obsidian-manual-sorting/commit/71fc89bd7794c0eb8dd9b389f7775abd890912f9))
* integrate OrderManager for saving and restoring item order in ManualSortingPlugin ([cf44580](https://github.com/Kh4f/obsidian-manual-sorting/commit/cf445805450a229e27efdbe72079eda8dccabe75))
* update data-path attribute for moved items manually ([f14d315](https://github.com/Kh4f/obsidian-manual-sorting/commit/f14d3159365603f6a7ff8d0cd50a0c24ef52e4ac))


### 🐞 Bug Fixes

* add cleanup for invalid paths after removing and renaming folders ([58ecaa1](https://github.com/Kh4f/obsidian-manual-sorting/commit/58ecaa18750c9743fb2731cc9fd423dd00fd380a))
* update folder path property manually on move to fix auto-update issue ([f2ebf27](https://github.com/Kh4f/obsidian-manual-sorting/commit/f2ebf27553cf6d01525b428717e2d688701523f9))

## 0.1.0 (2025-02-10)


### 🚀 Features

* add development-only logging function ([fc8d9c8](https://github.com/Kh4f/obsidian-manual-sorting/commit/fc8d9c8b3cbb6febca416c9187b01931ebffcea6))
* add initialization method ([13e2109](https://github.com/Kh4f/obsidian-manual-sorting/commit/13e21095544dcbc858e656f1179185bd8c4e08c2))
* add MutationObserver to monitor data-path attribute changes ([001bdd5](https://github.com/Kh4f/obsidian-manual-sorting/commit/001bdd5f396eec389fad865c3cb4c75ef3797883))
* add ribbon icon ([7761c1d](https://github.com/Kh4f/obsidian-manual-sorting/commit/7761c1dc5c31d8463b48917769e1ad5be18eda8f))
* implement file explorer patching using monkey-around ([6e027d1](https://github.com/Kh4f/obsidian-manual-sorting/commit/6e027d1c6deb65f3b48581441a353db254cae9a3))
* implement manual sorting functionality using SortableJS ([a74fd76](https://github.com/Kh4f/obsidian-manual-sorting/commit/a74fd76165031364cc1bce688d72ba731c874754))


### 🐞 Bug Fixes

* disconnect MutationObserver after processing new item ([d3ebea6](https://github.com/Kh4f/obsidian-manual-sorting/commit/d3ebea603328e2b14825544cd8075dc1f4ae2dda))
* update regex pattern to extracting first release notes from CHANGELOG.md ([1e81a09](https://github.com/Kh4f/obsidian-manual-sorting/commit/1e81a098ac1410f035387aa24f58a0b31a388e9f))
