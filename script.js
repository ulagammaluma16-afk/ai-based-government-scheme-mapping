const schemes = [

    // =========================
    // CENTRAL GOVERNMENT
    // =========================

    {
        name: "PM-USP Central Sector Scholarship",
        level: "Central Government",
        description: "Scholarship support for meritorious college and university students.",
        states: ["All"],
        categories: ["All"],
        education: ["UG", "PG"],
        student: "Yes",
        gender: "All",
        maxIncome: 450000,
        minAge: 17,
        maxAge: 30,
        disability: "All",
        farmer: "All",
        apply: "https://scholarships.gov.in"
    },

    {
        name: "PM YASASVI Scholarship",
        level: "Central Government",
        description: "Educational support for eligible OBC, EBC and DNT students.",
        states: ["All"],
        categories: ["OBC"],
        education: ["School", "Diploma", "UG"],
        student: "Yes",
        gender: "All",
        maxIncome: 250000,
        minAge: 10,
        maxAge: 30,
        disability: "All",
        farmer: "All",
        apply: "https://scholarships.gov.in"
    },

    {
        name: "Post-Matric Scholarship for SC Students",
        level: "Central / State",
        description: "Financial assistance for eligible SC students pursuing post-matric education.",
        states: ["All"],
        categories: ["SC"],
        education: ["Diploma", "UG", "PG", "PhD"],
        student: "Yes",
        gender: "All",
        maxIncome: 250000,
        minAge: 15,
        maxAge: 40,
        disability: "All",
        farmer: "All",
        apply: "https://scholarships.gov.in"
    },

    {
        name: "Post-Matric Scholarship for ST Students",
        level: "Central / State",
        description: "Financial assistance for eligible ST students after matriculation.",
        states: ["All"],
        categories: ["ST"],
        education: ["Diploma", "UG", "PG", "PhD"],
        student: "Yes",
        gender: "All",
        maxIncome: 250000,
        minAge: 15,
        maxAge: 40,
        disability: "All",
        farmer: "All",
        apply: "https://scholarships.gov.in"
    },

    {
        name: "AICTE Pragati Scholarship",
        level: "Central Government",
        description: "Scholarship support for eligible girl students pursuing technical education.",
        states: ["All"],
        categories: ["All"],
        education: ["Diploma", "UG"],
        student: "Yes",
        gender: "Female",
        maxIncome: 800000,
        minAge: 15,
        maxAge: 30,
        disability: "All",
        farmer: "All",
        apply: "https://www.aicte-india.org"
    },

    {
        name: "AICTE Saksham Scholarship",
        level: "Central Government",
        description: "Financial support for eligible students with disabilities in technical education.",
        states: ["All"],
        categories: ["All"],
        education: ["Diploma", "UG"],
        student: "Yes",
        gender: "All",
        maxIncome: 800000,
        minAge: 15,
        maxAge: 35,
        disability: "Yes",
        farmer: "All",
        apply: "https://www.aicte-india.org"
    },

    {
        name: "National Means-cum-Merit Scholarship",
        level: "Central Government",
        description: "Scholarship support for eligible school students.",
        states: ["All"],
        categories: ["All"],
        education: ["School"],
        student: "Yes",
        gender: "All",
        maxIncome: 350000,
        minAge: 10,
        maxAge: 18,
        disability: "All",
        farmer: "All",
        apply: "https://scholarships.gov.in"
    },

    {
        name: "Top Class Education Scheme for SC Students",
        level: "Central Government",
        description: "Financial support for eligible SC students studying in notified institutions.",
        states: ["All"],
        categories: ["SC"],
        education: ["UG", "PG"],
        student: "Yes",
        gender: "All",
        maxIncome: 800000,
        minAge: 17,
        maxAge: 35,
        disability: "All",
        farmer: "All",
        apply: "https://socialjustice.gov.in"
    },

    {
        name: "Scholarship for Students with Disabilities",
        level: "Central Government",
        description: "Educational assistance for eligible students with disabilities.",
        states: ["All"],
        categories: ["All"],
        education: ["School", "Diploma", "UG", "PG"],
        student: "Yes",
        gender: "All",
        maxIncome: 800000,
        minAge: 10,
        maxAge: 40,
        disability: "Yes",
        farmer: "All",
        apply: "https://scholarships.gov.in"
    },


    // =========================
    // TAMIL NADU
    // =========================

    {
        name: "Tamil Nadu BC Post-Matric Scholarship",
        level: "Tamil Nadu State",
        description: "Educational assistance for eligible BC students pursuing post-matric education.",
        states: ["Tamil Nadu"],
        categories: ["OBC"],
        education: ["Diploma", "UG", "PG", "PhD"],
        student: "Yes",
        gender: "All",
        maxIncome: 250000,
        minAge: 15,
        maxAge: 40,
        disability: "All",
        farmer: "All",
        apply: "https://bcw.tn.gov.in"
    },

    {
        name: "Tamil Nadu MBC Scholarship",
        level: "Tamil Nadu State",
        description: "Scholarship support for eligible Most Backward Class students.",
        states: ["Tamil Nadu"],
        categories: ["MBC"],
        education: ["Diploma", "UG", "PG", "PhD"],
        student: "Yes",
        gender: "All",
        maxIncome: 250000,
        minAge: 15,
        maxAge: 40,
        disability: "All",
        farmer: "All",
        apply: "https://bcw.tn.gov.in"
    },

    {
        name: "Tamil Nadu DNC Scholarship",
        level: "Tamil Nadu State",
        description: "Educational assistance for eligible Denotified Communities students.",
        states: ["Tamil Nadu"],
        categories: ["DNC"],
        education: ["Diploma", "UG", "PG", "PhD"],
        student: "Yes",
        gender: "All",
        maxIncome: 250000,
        minAge: 15,
        maxAge: 40,
        disability: "All",
        farmer: "All",
        apply: "https://bcw.tn.gov.in"
    },

    {
        name: "Tamil Nadu Adi Dravidar Scholarship",
        level: "Tamil Nadu State",
        description: "Educational support for eligible SC students in Tamil Nadu.",
        states: ["Tamil Nadu"],
        categories: ["SC"],
        education: ["School", "Diploma", "UG", "PG"],
        student: "Yes",
        gender: "All",
        maxIncome: 250000,
        minAge: 10,
        maxAge: 40,
        disability: "All",
        farmer: "All",
        apply: "https://www.tn.gov.in"
    },

    {
        name: "Tamil Nadu Differently Abled Student Scholarship",
        level: "Tamil Nadu State",
        description: "Financial assistance for eligible students with disabilities.",
        states: ["Tamil Nadu"],
        categories: ["All"],
        education: ["School", "Diploma", "UG", "PG"],
        student: "Yes",
        gender: "All",
        maxIncome: 300000,
        minAge: 10,
        maxAge: 40,
        disability: "Yes",
        farmer: "All",
        apply: "https://www.scd.tn.gov.in"
    },

    {
        name: "Pudhumai Penn Scheme",
        level: "Tamil Nadu State",
        description: "Financial support for eligible girl students pursuing higher education.",
        states: ["Tamil Nadu"],
        categories: ["All"],
        education: ["Diploma", "UG"],
        student: "Yes",
        gender: "Female",
        maxIncome: Infinity,
        minAge: 16,
        maxAge: 30,
        disability: "All",
        farmer: "All",
        apply: "https://www.tn.gov.in"
    },

    {
        name: "Tamil Nadu First Graduate Tuition Support",
        level: "Tamil Nadu State",
        description: "Support for eligible first-generation graduate students.",
        states: ["Tamil Nadu"],
        categories: ["All"],
        education: ["UG"],
        student: "Yes",
        gender: "All",
        maxIncome: Infinity,
        minAge: 17,
        maxAge: 30,
        disability: "All",
        farmer: "All",
        apply: "https://www.tn.gov.in"
    },

    {
        name: "Tamil Nadu Farmer Assistance",
        level: "Tamil Nadu State",
        description: "Example mapping entry for eligible agricultural beneficiaries.",
        states: ["Tamil Nadu"],
        categories: ["All"],
        education: ["School", "Diploma", "UG", "PG", "PhD"],
        student: "All",
        gender: "All",
        maxIncome: 500000,
        minAge: 18,
        maxAge: 70,
        disability: "All",
        farmer: "Yes",
        apply: "https://www.tn.gov.in"
    }

];


// =============================
// GET FORM VALUES
// =============================

document.getElementById("schemeForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const user = {

        name: document.getElementById("name").value.trim(),

        age: Number(document.getElementById("age").value),

        state: document.getElementById("state").value,

        gender: document.getElementById("gender").value,

        category: document.getElementById("category").value,

        education: document.getElementById("education").value,

        income: Number(document.getElementById("income").value),

        student: document.getElementById("student").value,

        disability: document.getElementById("disability").value,

        farmer: document.getElementById("farmer").value

    };


    checkSchemes(user);

});


// =============================
// CHECK ALL SCHEMES
// =============================

function checkSchemes(user) {

    let eligible = [];
    let notEligible = [];

    schemes.forEach(scheme => {

        let reasons = [];

        // STATE CHECK
        if (
            !scheme.states.includes("All") &&
            !scheme.states.includes(user.state)
        ) {
            reasons.push("State requirement not matched");
        }


        // CATEGORY CHECK
        if (
            !scheme.categories.includes("All") &&
            !scheme.categories.includes(user.category)
        ) {
            reasons.push("Category requirement not matched");
        }


        // EDUCATION CHECK
        if (
            !scheme.education.includes(user.education)
        ) {
            reasons.push("Education level not matched");
        }


        // STUDENT CHECK
        if (
            scheme.student !== "All" &&
            scheme.student !== user.student
        ) {
            reasons.push("Student status not matched");
        }


        // GENDER CHECK
        if (
            scheme.gender !== "All" &&
            scheme.gender !== user.gender
        ) {
            reasons.push("Gender requirement not matched");
        }


        // INCOME CHECK
        if (
            user.income > scheme.maxIncome
        ) {
            reasons.push(
                "Family income exceeds ₹" +
                scheme.maxIncome.toLocaleString("en-IN")
            );
        }


        // AGE CHECK
        if (
            user.age < scheme.minAge ||
            user.age > scheme.maxAge
        ) {
            reasons.push("Age requirement not matched");
        }


        // DISABILITY CHECK
        if (
            scheme.disability !== "All" &&
            scheme.disability !== user.disability
        ) {
            reasons.push("Disability requirement not matched");
        }


        // FARMER CHECK
        if (
            scheme.farmer !== "All" &&
            scheme.farmer !== user.farmer
        ) {
            reasons.push("Farmer requirement not matched");
        }


        const result = {
            scheme: scheme,
            reasons: reasons
        };


        if (reasons.length === 0) {
            eligible.push(result);
        } else {
            notEligible.push(result);
        }

    });


    displayResults(user, eligible, notEligible);

}


// =============================
// DISPLAY RESULTS
// =============================

function displayResults(user, eligible, notEligible) {

    const section = document.getElementById("results");

    section.style.display = "block";

    document.getElementById("eligibleCount").textContent =
        eligible.length;

    document.getElementById("eligibleNumber").textContent =
        eligible.length;

    document.getElementById("notEligibleNumber").textContent =
        notEligible.length;

    document.getElementById("totalNumber").textContent =
        schemes.length;


    const container =
        document.getElementById("resultsContainer");

    container.innerHTML = "";


    // ==========================
    // ELIGIBLE FIRST
    // ==========================

    eligible.forEach(item => {

        container.innerHTML += createSchemeCard(
            item.scheme,
            true,
            []
        );

    });


    // ==========================
    // NOT ELIGIBLE
    // ==========================

    notEligible.forEach(item => {

        container.innerHTML += createSchemeCard(
            item.scheme,
            false,
            item.reasons
        );

    });


    section.scrollIntoView({
        behavior: "smooth"
    });

}


// =============================
// CREATE SCHEME CARD
// =============================

function createSchemeCard(scheme, eligible, reasons) {

    const statusClass =
        eligible ? "eligible" : "not-eligible";

    const cardClass =
        eligible ? "" : "not-eligible";


    let incomeText;

    if (scheme.maxIncome === Infinity) {

        incomeText = "No income limit in this prototype";

    } else {

        incomeText =
            "Income limit: ₹" +
            scheme.maxIncome.toLocaleString("en-IN");

    }


    let reasonHTML = "";

    if (!eligible) {

        reasonHTML = `
            <div class="reason">
                <strong>Why not eligible:</strong>
                ${reasons.join(" • ")}
            </div>
        `;

    }


    return `

        <div class="scheme-card ${cardClass}">

            <div class="scheme-top">

                <div>

                    <div class="scheme-name">
                        ${scheme.name}
                    </div>

                    <div class="level">
                        ${scheme.level}
                    </div>

                </div>

                <div class="status ${statusClass}">
                    ${eligible ? "✓ ELIGIBLE" : "✕ NOT ELIGIBLE"}
                </div>

            </div>


            <p class="scheme-description">
                ${scheme.description}
            </p>


            <div class="scheme-details">

                <p>
                    <strong>Education:</strong>
                    ${scheme.education.join(", ")}
                </p>

                <p>
                    <strong>Category:</strong>
                    ${scheme.categories.join(", ")}
                </p>

                <p>
                    <strong>Age:</strong>
                    ${scheme.minAge} - ${scheme.maxAge}
                </p>

                <p>
                    <strong>${incomeText}</strong>
                </p>

            </div>


            ${reasonHTML}


            <a
                href="${scheme.apply}"
                target="_blank"
                class="apply-btn"
            >
                View / Apply →
            </a>

        </div>

    `;

}