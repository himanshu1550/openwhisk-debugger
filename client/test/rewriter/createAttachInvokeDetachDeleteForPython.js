/*
 * Copyright 2015-2016 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import it from '../helpers/driver'

it.should('create a python action, then attach, invoke, detach, delete, and finally quit without error', (name) => [
    `create ${name} python import sys\\n\\ndef main(dict):\\n    return { \'message\': \'Hello world\' }`,
    `attach ${name} -a`,
    `invoke ${name}`,
    `c`,
    `c`,
    `detach ${name}`,
    `delete ${name}`
], ['-c']); // use the cli debugger
