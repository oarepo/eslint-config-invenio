/*
 * SPDX-FileCopyrightText: 2022 CERN.
 * SPDX-License-Identifier: MIT
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

module.exports = yaml.load(fs.readFileSync(path.join(__dirname, "configs/prettier.yaml"), "utf8"));
