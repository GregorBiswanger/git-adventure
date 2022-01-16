import simpleGit, {SimpleGit} from 'simple-git/promise';
const projectPath = __dirname.replace('specs', 'my-project');
const git: SimpleGit = simpleGit(projectPath);

it('should success level 13', async () => {
    const statusResult = await git.status();
    const commits = await git.log();
    const tagResult = await git.tags();

    expect(statusResult.staged.length).toBe(0);
    expect(statusResult.modified.length).toBe(0);
    expect(commits.total).toBe(4);
    expect(tagResult.all.length).toBe(3);
});