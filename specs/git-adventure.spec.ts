import simpleGit, {SimpleGit} from 'simple-git/promise';
const projectPath = __dirname.replace('specs', 'my-project');
const git: SimpleGit = simpleGit(projectPath);

it('should success level 01', async () => {
    const commits = await git.log();

    expect(commits.total).toBe(1);
});