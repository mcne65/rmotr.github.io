---
layout: post
title: "Step by Step github guide for group projects"
category: students
tags: rmotr github group-work
cover: "/public/imgs/posts/cloud9-guide/cover.png"
fbauthor: "https://www.facebook.com/santiago.basulto"
author:
    name: "Santiago Basulto"
    link: "https://twitter.com/santiagobasulto"
---

This is a step by step guide to help you setup a Cloud9 workspace to work with your group project.

### Step 1: Login to cloud9 using Github

As we've told you you used Github to login to cloud9. In the Log In page you should use the Github option:

![Github login in Cloud9](/public/imgs/posts/cloud9-guide/cloud9_github_login.png)


### Step 2: Identify your dashboard

After you've successfully logged in into Cloud9 you should see your dashboard:

![Cloud9 Dashboard](/public/imgs/posts/cloud9-guide/cloud9_dashboard.png)

### Step 3: Create a new workspace

In your dashboard you should see a button to "Create new Workspace". If you click on it you should be taken in the following page:

![Cloud9 create new workspace](/public/imgs/posts/cloud9-guide/new_workspace.png)

### Step 4: Identify your repository clone URL

Remember the fork of the repository we did previously (in the Github guide)? Now we're going to use that repo to get the _clone URL_. The clone URL is a special Git URL used to clone repositories. You'll should see it as in the following image (marked with a red arrow):

**Important: Please make sure you're in your own repo (red underlines), not in the rmotr organization's repo**

![Github clone URL](/public/imgs/posts/cloud9-guide/github_clone_url.png)

In this case my Clone URL is: `git@github.com:santiagobasulto/pyp-c1-a3-b4-g3-t9.git`. Note that it's a special type of URL because it starts with `git@github`. **Also note that it contains MY username** (_santiagobasulto_).

### Step 5: Use the clone URL to create the workspace

Fill the required information to create the new workspace. Use whatever name you want (although using the same name of the repo will save you a few headaches). Make it public (it's FREE). Choose the image you want (we always use the default Ubuntu one).

**Use the clone URL from the previous step to create the workspace**. As you can see in the following image:

![Cloud9 new workspace with Github clone URL](/public/imgs/posts/cloud9-guide/new_workspace_info.png)

### Step 6: Profit!

You should see all the files from the repository in your new workspace. That means that Cloud9 __cloned__ from your Github repository. It's a copy of your repo.

![Cloud9 Workspace cloned from Github](/public/imgs/posts/cloud9-guide/workspace_cloned.png)

### Step 7: Make your first change

Create a file (`main.py` for example and make a few changes):

```python
def main():
    pass
```

![Cloud9 create new file](/public/imgs/posts/cloud9-guide/cloud9_new_file.png)

Add your changes and save:

![Cloud9 create new file](/public/imgs/posts/cloud9-guide/modify_file.png)

### Step 8: Use Git to push your changes to your repo

We'll be using a few Git commands to interact from our workspace with our repository:

* `git status`: See the status of your workspace's Git repo
* `git add`: Add new/modified files to the Git index
* `git commit`: Commit changes after you've added the files
* `git push`: Push your changes to your Github repo

Using the workspace console check the status of your file. You should be the new file (_main.py_) as a new untracked file:

![Git status new file](/public/imgs/posts/cloud9-guide/git-status-new-file.png)

Use the `git add` command to add the new file to the index: `git add main.py`

If you check the status again, `main.py` should appear as added:

![Git status file added](/public/imgs/posts/cloud9-guide/git-status-file-added.png)

You're ready now to commit the changes. The command is `git commit -m [MESSAGE]`. `[MESSAGE]` should be a human readable message to keep track of the changes you've done. I'll do: `git commit -m "New file added, starting develop"` Git will print a summary of the changes committed:

![Git commit new file](/public/imgs/posts/cloud9-guide/git-commit-new-file.png)

You're ready now to push your changes to the repo. Just do `git push`. Git will also print a summary of the command executed:

![Git push new changes](/public/imgs/posts/cloud9-guide/git-push-new-changes.png)

### Step 9: Check your repo, you should see your changes

When we did `git push` git sent the latest changes **committed** to our personal Github repository. If you check your repo you should see your last commit message and the new files added:

![Changes pushed to github](/public/imgs/posts/cloud9-guide/changes-pushed-to-github.png)

### Step 10: Send a Pull Request to the team repo

The changes you've made so far have been reflected in your own personal repo. Once you're sure that those chances are good you will want to share them with the team. To do that we'll be using Github's Pull Requests. Pull Requests, or PRs, have several benefits. To name a few:

* Great visibility: Every team member will get a notification when a new PR is created. They'll have a unique URL to see your changes.
* Promotes code review: PRs have a great interface and it's really easy to read and review the changes made. Once you've sent your PR other teammates can read about your changes and leave comments and suggestions.
* Traceability: At anytime you can go back and see **who** made **what** changes.
* Organized way to collaborate: You won't have conflicts if you work with PRs in the right way. There's no way the same file is modified by two people at the same time.

To create a PR go to your repo and hit the _New Pull request_ button:

![Identify the Pull Request button](/public/imgs/posts/cloud9-guide/pr-button.png)

Once you click the _New pull request_ button you'll be taken to the PR page where you will be able to specify a few things. You can leave everything as it is, there's no need to customize anything:

![Create Github Pull Request](/public/imgs/posts/cloud9-guide/pr-created.png)

After you've created the Pull Request you'll see a screen to add a message to your teammates describing your changes:

![Save message to Github Pull Request](/public/imgs/posts/cloud9-guide/pr-message.png)

Add your comments, click the _Create Pull Request_ button and the PR will be created:

![Github Pull Request](/public/imgs/posts/cloud9-guide/pr-page.png)

### Step 11: Review the Pull Request and merge it

Once you've sent your PR (or someone else in your team has done it) people can review the changes and decide to merge them or not. The _Files changed_ tab will show you the changes made. Once you agree with those changes you'll be able to merge them:

![Merge Github Pull Request](/public/imgs/posts/cloud9-guide/merge-pr.png)

Once you've merged the changes they will appear in the group repository.

**That's it! Remember that you can always ask in #mentors-help channel if you have any questions about the Github workflow and we'll help you right away**
