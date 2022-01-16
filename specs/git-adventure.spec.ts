import simpleGit, {SimpleGit} from 'simple-git/promise';
const projectPath = __dirname.replace('specs', 'my-project');
const git: SimpleGit = simpleGit(projectPath);

it('should success level 20', async () => {
    const statusResult = await git.status();
    const commits = await git.log();
    const tagResult = await git.tags();
    const branchSummary = await git.branch();

    expect(statusResult.staged.length).toBe(0);
    expect(statusResult.modified.length).toBe(0);
    expect(commits.total).toBe(10);
    expect(tagResult.all.length).toBe(2);
    expect(branchSummary.current.toLowerCase()).toBe('style');
    expect(branchSummary.all.length).toBe(2);
});