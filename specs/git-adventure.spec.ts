import simpleGit, {SimpleGit} from 'simple-git/promise';
const projectPath = __dirname.replace('specs', 'my-project');
const git: SimpleGit = simpleGit(projectPath);

it('should success level 05', async () => {
    const statusResult = await git.status();
    const commits = await git.log();

    expect(statusResult.staged.length).toBe(0);
    expect(statusResult.modified.length).toBe(0);
    expect(commits.total).toBe(4);
    expect(commits.latest?.message.toLowerCase()).toBe('added html header');
});