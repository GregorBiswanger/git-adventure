import util from 'util';
import child_process from 'child_process';
const exec = util.promisify(child_process.exec);
const GREENTEXT = '\x1b[32m%s\x1b[0m';
const REDTEXT = '\x1b[31m%s\x1b[0m';

import simpleGit, { SimpleGit } from 'simple-git';
const git: SimpleGit = simpleGit(__dirname);

import settings from './settings.json';

(async () => {
    try {
        console.log('Deine Aufgabe wird getestet...');
        const { stdout: jestOutput } = await exec('npm run test:json');
        const indexOfFirstBrace = jestOutput.indexOf('{');
        const jsonStringOfOutput = jestOutput.substring(indexOfFirstBrace, jestOutput.length);
        const jestTestResult: JestOutput = JSON.parse(jsonStringOfOutput);

        if (jestTestResult.numPassedTests) {
            console.log(GREENTEXT, 'Herzlichen Glückwunsch! Du kommst ins nächste Level!');

            const nextLevel = settings.currentLevel + 1;
            const nextLevelNumber = String(nextLevel).padStart(2, '0');
            await git.add('./*')
                .commit(`level ${settings.currentLevel} completed`)
                .checkout(nextLevelNumber + '-level');

            console.log('Du kannst jetzt mit der nächsten Aufgabe starten.');
        }

    } catch (error) {
        console.error(error);
        console.log(REDTEXT, 'Du hast die Aufgabe nicht gemeistert!');
    }
})();

export interface Snapshot {
    added: number;
    didUpdate: boolean;
    failure: boolean;
    filesAdded: number;
    filesRemoved: number;
    filesRemovedList: any[];
    filesUnmatched: number;
    filesUpdated: number;
    matched: number;
    total: number;
    unchecked: number;
    uncheckedKeysByFile: any[];
    unmatched: number;
    updated: number;
}

export interface AssertionResult {
    ancestorTitles: any[];
    failureMessages: any[];
    fullName: string;
    location?: any;
    status: string;
    title: string;
}

export interface TestResult {
    assertionResults: AssertionResult[];
    endTime: number;
    message: string;
    name: string;
    startTime: number;
    status: string;
    summary: string;
}

export interface JestOutput {
    numFailedTestSuites: number;
    numFailedTests: number;
    numPassedTestSuites: number;
    numPassedTests: number;
    numPendingTestSuites: number;
    numPendingTests: number;
    numRuntimeErrorTestSuites: number;
    numTodoTests: number;
    numTotalTestSuites: number;
    numTotalTests: number;
    openHandles: any[];
    snapshot: Snapshot;
    startTime: number;
    success: boolean;
    testResults: TestResult[];
    wasInterrupted: boolean;
}