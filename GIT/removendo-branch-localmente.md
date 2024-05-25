git fetch --prune

# To delete a fully merged branch
git branch -d <branch_to_delete>

# To forcefully delete a branch (regardless of its merge status)
git branch -D <branch_to_delete>

git push origin --delete <branch_to_delete>
