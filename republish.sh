SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"

git pull

rm -rf build
echo "Removing old build DONE!"

if [ "$1" != "nu" ]
then
      cd "$SCRIPT_DIR"/server || exit
      rm -rf node_modules
      npm i
      echo "Updating SERVER DONE!"

      cd "$SCRIPT_DIR"/client || exit
      rm -rf node_modules
      npm i
      echo "Updating CLIENT DONE!"
fi

cd "$SCRIPT_DIR"/client || exit
npm run build

echo "DONE!"
