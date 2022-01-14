import simpleGit, {SimpleGit} from 'simple-git/promise';
const projectPath = __dirname.replace('specs', 'my-project');
const git: SimpleGit = simpleGit(projectPath);

it('should success level 03', async () => {
    const statusResult = await git.status();

    expect(statusResult.staged).toContain('hallo.html');
});