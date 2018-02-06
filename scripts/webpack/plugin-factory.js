/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const CopyrightBannerPlugin = require('./copyright-banner-plugin');
const CssCleanupPlugin = require('../../scripts/webpack/css-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = class {
  constructor({pathResolver, globber} = {}) {
    this.pathResolver_ = pathResolver;
    this.globber_ = globber;
  }

  createCopyrightBannerPlugin() {
    return new CopyrightBannerPlugin();
  }

  createCssCleanupPlugin({cleanupDirRelativePath} = {}) {
    return new CssCleanupPlugin({
      cleanupDirRelativePath,
      globber: this.globber_,
    });
  }

  createCssExtractorPlugin(outputFilenamePattern) {
    return new ExtractTextPlugin(outputFilenamePattern);
  }
};
