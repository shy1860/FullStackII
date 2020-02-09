#/bin/bash

echo 'Which week are you currently in?'
read week
echo 'How many exercise do you have today?'
read exercises


mkdir Lab-Week$week
cd Lab-Week$week

for ((i=1;i<=$exercises;i++))
do
    touch exercise$i.js
done
