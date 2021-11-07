# How to deploy web using `forever` package

### - `step 1`

[sudo] npm install forever -g

### - `step 2`

yarn || npm i

### - `step 3`

npm run build

### - `step 4`

forever start -c "serve -s" build/

# Note

### - `list all running forever scripts`

forever list

### - `stop the daemon SCRIPT by Id|Uid|Pid|Index|Script`

forever stop `<Pid>`
