import simpleGit, {SimpleGit} from 'simple-git/promise';
const projectPath = __dirname.replace('specs', 'my-project');
const git: SimpleGit = simpleGit(projectPath);

it('should success level 02', async () => {
    const statusResult = await git.status();

    expect(statusResult.modified).toContain('hallo.html');
});