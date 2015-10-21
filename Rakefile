task :build do
  system "npm run build"
end

namespace "heroku" do

  desc "deploy to heroku"
  task :deploy => :build do
    root = "/tmp/react_slides_tmp"

    system(<<-SCRIPT)
      rm -rf #{root}
      mkdir #{root}
      cp -r ./dist #{root}
      cp -r ./public #{root}
      cp index.html #{root}
      cp package.json #{root}
      cp Procfile #{root}
      cp prodServer.js #{root}
      cd #{root}
      git init
      git add .
      git commit -m"heroku build"
      echo "hi poggie!"
      heroku login
      git remote add heroku https://git.heroku.com/ancient-basin-7920.git
      git push --force heroku master
    SCRIPT
  end

end