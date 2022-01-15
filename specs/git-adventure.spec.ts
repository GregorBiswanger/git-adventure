import simpleGit, {SimpleGit} from 'simple-git/promise';
const projectPath = __dirname.replace('specs', 'my-project');
const git: SimpleGit = simpleGit(projectPath);

it('should success level 04', async () => {
    const statusResult = await git.status();
    const commits = await git.log();

    expect(statusResult.staged.length).toBe(0);
    expect(statusResult.modified.length).toBe(0);
    expect(commits.total).toBe(2);
    expect(commits.latest?.message.toLowerCase()).toBe('added h1 tag');
});