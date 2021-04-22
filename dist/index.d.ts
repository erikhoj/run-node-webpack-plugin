/// <reference types="node" />
import { ChildProcess, ForkOptions } from 'child_process';
import { Compiler } from 'webpack';
export interface RunNodeWebpackPluginOptions {
    scriptToRun?: string;
    scriptsToWatch?: string[];
    runOnlyOnChanges?: boolean;
    runOnlyInWatchMode?: boolean;
    runOnlyInNormalMode?: boolean;
    ignoreErrors?: boolean;
    forkOptions?: ForkOptions;
    nodeArgs?: string[];
}
export default class RunNodeWebpackPlugin {
    options: RunNodeWebpackPluginOptions;
    isWebpackInWatchMode: boolean;
    isFirstRun: boolean;
    errorsInPrevCompilation: boolean;
    scriptName: string;
    scriptPath: string;
    scriptProcess: ChildProcess;
    constructor(passedOptions?: RunNodeWebpackPluginOptions);
    apply(compiler: Compiler): void;
}
