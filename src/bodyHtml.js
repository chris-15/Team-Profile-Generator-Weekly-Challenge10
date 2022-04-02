// function to generate the body of the html page
function body(cards){
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <title>Document</title>
  </head>
  <body class="bg-secondary bg-gradient bg-opacity-25">
    <div class="p-5 mb-4 bg-danger bg-gradient rounded-3">
      <div class="container-fluid py-1 text-center text-white">
        <h1 class="display-5 fw-bold">My Team</h1>
      </div>
    </div>

    <div class="container">
      <div class="d-flex flex-wrap justify-content-evenly">
       ${cards}

      </div>
    </div>
  </body>
</html>
    `
}

module.exports = body;