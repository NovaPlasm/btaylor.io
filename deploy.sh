CYAN='\033[0;36m'
PURPLE='\033[0;35m'
printf "${CYAN}Deploying current build to production!${PURPLE}\n"
git push prod master