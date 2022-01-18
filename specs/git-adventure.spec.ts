import simpleGit, {SimpleGit} from 'simple-git/promise';
const projectPath = __dirname.replace('specs', 'my-project');
const git: SimpleGit = simpleGit(projectPath);

const secondProjectPath = __dirname.replace('specs', 'cloned_my-project');
const git2: SimpleGit = simpleGit(secondProjectPath);

it('should success level 39', async () => {
    const statusResult = await git.status();
    const commits = await git.log();
    const tagResult = await git.tags();
    const branchSummary = await git.branch();
    const remotes = await git.getRemotes();

    expect(statusResult.staged.length).toBe(0);
    expect(statusResult.modified.length).toBe(0);
    expect(commits.total).toBe(13);
    expect(tagResult.all.length).toBe(2);
    expect(branchSummary.current.toLowerCase()).toBe('main');
    expect(branchSummary.all.length).toBe(3);
    expect(remotes[0].name.toLowerCase()).toBe('shared');

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
});