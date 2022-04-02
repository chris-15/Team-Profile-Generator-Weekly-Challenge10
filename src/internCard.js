
function internCard(employee) {
    return `
    <div class="mb-4">
          <div class="card" style="width: 18rem">
            <div class="card-body bg-primary bg-gradient text-white">
              <h5 class="card-title">${employee.name}</h5>
              <h5 class="card-title">
                <i class="fa-solid fa-user-graduate"></i> Intern
              </h5>
            </div>
            <ul class="list-group list-group-flush pt-4">
              <li class="list-group-item">ID: ${employee.id}</li>
              <li class="list-group-item">
                Email: <a href="mailto:${employee.email}">${employee.email}</a>
              </li>
              <li class="list-group-item">School: ${employee.school}</li>
            </ul>
          </div>
        </div>
    `
};

module.exports = internCard;