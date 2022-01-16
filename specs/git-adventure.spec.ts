import simpleGit, {SimpleGit} from 'simple-git/promise';
const projectPath = __dirname.replace('specs', 'my-project');
const git: SimpleGit = simpleGit(projectPath);

it('should success level 09', async () => {
    const tagResult = await git.tags();
    const statusResult = await git.status();

    expect(tagResult.all[0].toLowerCase()).toBe('v1');
    expect(tagResult.all[1].toLowerCase()).toBe('v1-beta');
    expect(statusResult.detached).toBe(true);
    expect(statusResult.ahead).toBe(0);
});