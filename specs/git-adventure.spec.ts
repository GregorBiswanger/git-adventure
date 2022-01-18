import simpleGit, {SimpleGit} from 'simple-git/promise';
const projectPath = __dirname.replace('specs', 'my-project');
const git: SimpleGit = simpleGit(projectPath);

const secondProjectPath = __dirname.replace('specs', 'cloned_my-project');
const git2: SimpleGit = simpleGit(secondProjectPath);

const bareProjectPath = __dirname.replace('specs', 'my-project.git');
const git3: SimpleGit = simpleGit(secondProjectPath);

it('should success level 38', async () => {
    const statusResult = await git.status();
    const commits = await git.log();
    const tagResult = await git.tags();
    const branchSummary = await git.branch();

    expect(statusResult.staged.length).toBe(0);
    expect(statusResult.modified.length).toBe(0);
    expect(commits.total).toBe(12);
    expect(tagResult.all.length).toBe(2);
    expect(branchSummary.current.toLowerCase()).toBe('main');
    expect(branchSummary.all.length).toBe(2);

    // Check cloned repository
    const statusResult2 = await git2.status();
    const commits2 = await git2.log();
    const tagResult2 = await git2.tags();
    const branchSummary2 = await git2.branch();

    expect(statusResult2.staged.length).toBe(0);
    expect(statusResult2.modified.length).toBe(0);
    expect(commits2.total).toBe(12);
    expect(commits2.latest?.message.toLowerCase()).toBe('changed readme in original repo');
    expect(tagResult2.all.length).toBe(2);
    expect(branchSummary2.current.toLowerCase()).toBe('main');
    expect(branchSummary2.all.length).toBe(4);

    // Check cloned bare repository
    const statusResult3 = await git3.status();
    const commits3 = await git3.log();
    const tagResult3 = await git3.tags();
    const branchSummary3 = await git3.branch();

    expect(statusResult3.staged.length).toBe(0);
    expect(statusResult3.modified.length).toBe(0);
    expect(commits3.total).toBe(12);
    expect(commits3.latest?.message.toLowerCase()).toBe('changed readme in original repo');
    expect(tagResult3.all.length).toBe(2);
    expect(branchSummary3.current.toLowerCase()).toBe('main');
    expect(branchSummary3.all.length).toBe(4);
});