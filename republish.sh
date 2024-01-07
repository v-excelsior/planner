echo "Removing old build..."
git pull
echo "Removing old build..."

echo "Removing old build..."
rm -rf build
echo "Removing old build DONE!"

echo "Updating SERVER deps..."
cd ./server || exit
echo "Removing old SERVER deps..."
rm -rf node_modules
echo "Installing new SERVER deps..."
npm i
echo "Updating SERVER DONE!"

echo "Updating CLIENT deps..."
cd ../client || exit
echo "Removing old CLIENT deps..."
rm -rf node_modules
echo "Installing new CLIENT deps..."
npm i
echo "Updating CLIENT DONE!"


echo "Building CLIENT..."
npm run build
echo "Building CLIENT DONE!"
