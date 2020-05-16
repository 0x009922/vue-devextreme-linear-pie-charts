PUBLIC_PATH=/vue-devextreme-linear-pie-charts/ yarn build
cd dist
git init
git add --all
git commit -m 'Build'
git remote add origin git@github.com:LiquidSolid/vue-devextreme-linear-pie-charts.git
git push -f origin master:gh-pages
