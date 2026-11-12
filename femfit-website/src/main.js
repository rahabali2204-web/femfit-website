
import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <a class="logo" href="#home">FEM<span>FIT</span></a>

    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#programs">Wellness</a>
      <a href="#team">Our Experts</a>
      <a href="#branches">Branches</a>
      <a href="#membership">Packages</a>
    </nav>

    <a class="nav-btn" href="#registration">JOIN NOW ↗</a>
  </header>

  <main>

    <!-- HERO -->
    <section class="hero" id="home">
      <div class="hero-content">
        <p class="eyebrow">✦ BAHWALPUR'S WOMEN'S WELLNESS DESTINATION</p>

        <h1>STRONGER<br>THAN YOUR<br><span>EXCUSES.</span></h1>

        <p class="hero-text">
          Your journey. Your strength. Your transformation.
          Discover fitness, rehabilitation and nutrition
          in one supportive space.
        </p>

        <div class="hero-actions">
          <a href="#registration" class="primary-btn">START YOUR JOURNEY ↗</a>
          <a href="#about" class="secondary-btn">DISCOVER FEMFIT</a>
        </div>

        <div class="hero-stats">
          <div><strong>3</strong><small>WELLNESS SERVICES</small></div>
          <div><strong>2</strong><small>BAHAWALPUR BRANCHES</small></div>
          <div><strong>8+</strong><small>TEAM PROFILES</small></div>
        </div>
      </div>

      <div class="hero-image">
        <div class="image-label">BUILT BY YOU. POWERED BY YOU.</div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="intro" id="about">
      <p class="eyebrow">WELCOME TO FEMFIT</p>
      <h2>YOUR BODY.<br><span>YOUR WELLNESS.</span></h2>

      <p>
        At FemFit Ladies Gym, we bring complete care together.
        From fitness training to rehabilitation and nutrition,
        we're here to support your wellness journey.
      </p>
    </section>

    <!-- SERVICES -->
    <section class="programs" id="programs">
      <p class="eyebrow">WHAT WE OFFER</p>
      <h2>YOUR WELLNESS. <span>OUR PRIORITY.</span></h2>

      <div class="program-grid">
        <article>
          <span>01 / FITNESS</span>
          <h3>TRAINING</h3>
          <p>Certified female trainers supporting your fitness journey through group classes and personal guidance.</p>
        </article>

        <article>
          <span>02 / REHABILITATION</span>
          <h3>PHYSIOTHERAPY</h3>
          <p>Physiotherapy care focused on pain management, rehabilitation and better movement.</p>
        </article>

        <article>
          <span>03 / NUTRITION</span>
          <h3>NUTRITION</h3>
          <p>Personalized nutrition guidance to support healthier habits and fitness goals.</p>
        </article>
      </div>
    </section>

    <!-- TEAM -->
    <section class="team" id="team">
      <p class="eyebrow">INTRODUCING OUR DREAM TEAM</p>
      <h2>MEET YOUR <span>WELLNESS EXPERTS.</span></h2>

      <p class="team-intro">
        Your complete wellness squad under one roof.
        Meet the fitness trainers, physiotherapists and nutrition
        professionals supporting the FemFit community.
      </p>

      <h3 class="team-category">FITNESS TRAINERS</h3>

      <div class="team-grid">

        <article class="team-card">
          <div class="team-info">
            <span>FITNESS & WELLNESS COACH</span>
            <h3>JIA</h3>
            <p>9+ years of experience</p>
            <p>
              Helping people build strength, improve fitness
              and develop healthy habits.
            </p>
            <p><strong>Classes:</strong> Zumba, Yoga, Aerobics, Stretching, Kettlebell Training, Core Workout, Pilates and CrossFit.</p>
            <a href="https://www.instagram.com/jia_fitnessstreak/"
               target="_blank" rel="noopener noreferrer">@jia_fitnessstreak ↗</a>
          </div>
        </article>

        <article class="team-card">
          <div class="team-info">
            <span>CERTIFIED FITNESS TRAINER</span>
            <h3>RIMSHA RAUF</h3>
            <p>Effective | Safe | Sustainable</p>
            <p>
              Passionate about helping people build strength,
              improve fitness and develop healthy habits.
            </p>
            <p><strong>Location:</strong> Misri Center Branch, Bahawalpur</p>
            <a href="https://www.instagram.com/rimsha_32323/"
               target="_blank" rel="noopener noreferrer">@rimsha_32323 ↗</a>
          </div>
        </article>

        <article class="team-card">
          <div class="team-info">
            <span>FITNESS TRAINER</span>
            <h3>VANEEZA AHMED</h3>
            <p>Stronger Body | Healthier Mind | Better You</p>
            <p>
              Zumba and aerobics, motivation and support,
              group classes and personal guidance.
            </p>
            <p><strong>Location:</strong> DHA Branch, Bahawalpur</p>
          </div>
        </article>

      </div>

      <h3 class="team-category">PHYSIOTHERAPISTS</h3>

      <div class="team-grid">

        <article class="team-card">
          <div class="team-info">
            <span>SENIOR PHYSIOTHERAPIST</span>
            <h3>DR. REESHA RIAZ PT</h3>
            <p>Helping women move better and feel stronger.</p>
            <p>
              Women's mobility, pain management, injury
              rehabilitation, post-fracture rehabilitation
              and joint care.
            </p>
            <p><strong>Location:</strong> Misri Center Branch, Bahawalpur</p>
          </div>
        </article>

        <article class="team-card">
          <div class="team-info">
            <span>PHYSIOTHERAPIST</span>
            <h3>DR. MAHNOOR SALEEM</h3>

            <p><strong>Education:</strong></p>
            <p>DPT – Agile Institute of Rehabilitation Sciences, Bahawalpur.</p>
            <p>MSPT – Times University, Multan.</p>
            <p>NAVTTC SEO Course – Corvit, Bahawalpur.</p>

            <p><strong>Expertise:</strong> Pain relief, mobility, flexibility, strength, stability and joint health.</p>
            <a href="https://www.instagram.com/drmahnoor_physio/"
               target="_blank" rel="noopener noreferrer">@drmahnoor_physio ↗</a>
          </div>
        </article>

      </div>

      <h3 class="team-category">NUTRITIONISTS</h3>

      <div class="team-grid">

        <!-- SAMAN JAVED -->
        <article class="team-card">
          <div class="team-info">
            <span>CLINICAL NUTRITIONIST & CONSULTANT DIETITIAN</span>
            <h3>DIETITIAN SAMAN JAVED</h3>

            <p>
              Nutritionist at FemFit Ladies Gym.
            </p>

            <p>
              I am a Clinical Nutritionist and Consultant Dietitian
              with experience in women's health, weight management
              and lifestyle nutrition.
            </p>

            <p>
              At FemFit, my goal is to help you build a healthier
              relationship with food, achieve your fitness goals
              and feel your best inside out.
            </p>

            <p><strong>Specialties:</strong></p>
            <p>
              Weight Management | PCOS & Hormonal Health |
              Personalized Diet Plans | Sports & Fitness Nutrition |
              Sustainable Healthy Habits
            </p>

            <p><strong>Location:</strong> DHA Branch, Bahawalpur</p>

            <a href="https://www.instagram.com/femfitladiesgym/"
               target="_blank" rel="noopener noreferrer">@femfitladiesgym ↗</a>
          </div>
        </article>

        <!-- SAMRA NADIR -->
        <article class="team-card">
          <div class="team-info">
            <span>NUTRITIONIST</span>
            <h3>SAMRA NADIR</h3>

            <p>
              I help people improve their health through
              personalized nutrition and balanced diet plans,
              including support for weight management and
              healthy lifestyle changes.
            </p>

            <p>
              My goal is to make healthy eating simple,
              practical and sustainable.
            </p>

            <p><strong>How I Can Help:</strong></p>
            <p>
              Weight Management (Weight Loss / Weight Gain) |
              Personalized Diet Plans (Veg & Non-Veg) |
              Thyroid & Hormonal Support |
              Diabetes & Lifestyle Diseases |
              Digestive Health & Gut Wellness |
              Pregnancy & Lactation Nutrition |
              Overall Healthy Lifestyle Guidance
            </p>

            <p><strong>Why Choose Me?</strong></p>
            <p>
              Evidence-based nutrition, customized diet plans,
              easy-to-follow guidance, ongoing support and
              motivation, and a focus on long-term results.
            </p>

            <p>
              Personalized 1-on-1 access, practical solutions,
              ongoing monitoring and adjustments, and a
              comprehensive approach to health.
            </p>

            <p><strong>Location:</strong> Basement, Misri Centre, Dubai Mahal Chowk, Bahawalpur</p>

            <a href="https://www.instagram.com/femfitladiesgym/"
               target="_blank" rel="noopener noreferrer">@femfitladiesgym ↗</a>
          </div>
        </article>

        <!-- DN IRDUM ALI -->
        <article class="team-card">
          <div class="team-info">
            <span>CLINICAL NUTRITIONIST & DIETITIAN (DN)</span>
            <h3>DN IRDUM ALI</h3>

            <p>
              Hi, I'm Irdum Ali, a Clinical Nutritionist and
              Dietitian (DN), and I'm here to help you build
              a healthier, stronger and more confident you
              through personalized nutrition and practical
              lifestyle strategies.
            </p>

            <p><strong>How I Can Support You:</strong></p>
            <p>
              Personalized Nutrition Plans | Weight Management |
              Disease Prevention | Gut Health & Digestion |
              Healthy Eating Habits
            </p>

            <p>
              Small Changes Make Big Results.
            </p>

            <p><strong>Location:</strong> FemFit Ladies Gym, Dubai Mahal Chowk, Bahawalpur</p>

            <a href="https://www.instagram.com/bites.of_life/"
               target="_blank" rel="noopener noreferrer">@Bites.of_life ↗</a>
          </div>
        </article>

      </div>
    </section>

    <!-- BRANCHES -->
    <section class="branches" id="branches">
      <p class="eyebrow">FIND YOUR FEMFIT</p>
      <h2>TWO LOCATIONS. <span>ONE COMMUNITY.</span></h2>

      <div class="branch-grid">

        <article class="branch-card">
          <span>01 / MAIN BRANCH</span>
          <h3>MISRI CENTER</h3>
          <p>Basement, Misri Center, Dubai Mahal Chowk, Bahawalpur.</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Misri+Center+Dubai+Mahal+Chowk+Bahawalpur"
             target="_blank" rel="noopener noreferrer">GET DIRECTIONS ↗</a>
        </article>

        <article class="branch-card">
          <span>02 / DHA BRANCH</span>
          <h3>DHA BAHWALPUR</h3>
          <p>Basement, Building M1, Sector A, Bahawalpur.</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Building+M1+Sector+A+DHA+Bahawalpur"
             target="_blank" rel="noopener noreferrer">GET DIRECTIONS ↗</a>
        </article>

      </div>
    </section>

    <!-- MEMBERSHIP PLANS -->
    <section class="membership" id="membership">
      <p class="eyebrow">INVEST IN YOUR WELLNESS</p>
      <h2>CHOOSE YOUR <span>MEMBERSHIP.</span></h2>

      <p class="registration-intro">
        Find the membership duration that works for your goals.
      </p>

      <div class="program-grid">

        <article class="membership-card">
          <span>STUDENT PACKAGE</span>
          <h3>STUDENT</h3>
          <p>3 Months — Rs. 12,000</p>
          <p>6 Months — Rs. 24,000</p>
          <p>12 Months — Rs. 46,000</p>
          <a href="#registration" class="primary-btn">SELECT PLAN ↗</a>
        </article>

        <article class="membership-card">
          <span>REGULAR PACKAGE</span>
          <h3>REGULAR</h3>
          <p>3 Months — Rs. 18,000</p>
          <p>6 Months — Rs. 36,000</p>
          <p>12 Months — Rs. 70,000</p>
          <a href="#registration" class="primary-btn">SELECT PLAN ↗</a>
        </article>

      </div>

      <div class="registration-note">
        <p>One-time Registration Fee: <strong>Rs. 10,000</strong></p>
        <small>Membership prices are subject to confirmation by FemFit.</small>
      </div>
    </section>

    <!-- REGISTRATION -->
    <section class="registration" id="registration">
      <p class="eyebrow">YOUR FEMFIT JOURNEY STARTS HERE</p>
      <h2>MEMBERSHIP <span>REGISTRATION.</span></h2>

      <p class="registration-intro">
        Complete the form below. Our team will contact you
        to confirm your membership.
      </p>

      <form id="registration-form">

        <div class="form-grid">

          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName"
              placeholder="Enter your full name" required>
          </div>

          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age"
              placeholder="Your age" min="14" max="100" required>
          </div>

          <div class="form-group">
            <label for="phone">WhatsApp Number</label>
            <input type="tel" id="phone"
              placeholder="03XXXXXXXXX" required>
          </div>

          <div class="form-group">
            <label for="branch">Preferred Branch</label>
            <select id="branch" required>
              <option value="">Choose a branch</option>
              <option value="Misri Center Branch">Misri Center Branch</option>
              <option value="DHA Branch">DHA Branch</option>
            </select>
          </div>

          <div class="form-group">
            <label for="package">Membership Package</label>
            <select id="package" required>
              <option value="">Choose a package</option>
              <option value="Student">Student Package</option>
              <option value="Regular">Regular Package</option>
            </select>
          </div>

          <div class="form-group">
            <label for="duration">Membership Duration</label>
            <select id="duration" required>
              <option value="">Choose duration</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
            </select>
          </div>

        </div>

        <div class="registration-note" id="price-summary">
          <p>Membership Fee: <strong id="membership-price">Select a plan</strong></p>
          <p>Registration Fee: <strong>Rs. 10,000</strong></p>
          <p>Total: <strong id="total-price">Select a plan</strong></p>
        </div>

        <button type="submit" class="primary-btn">
          SUBMIT REGISTRATION ↗
        </button>

      </form>
    </section>

    <!-- CONTACT -->
    <section class="join" id="join">
      <p class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
      <h2>READY TO <span>JOIN FEMFIT?</span></h2>

      <p>
        Have questions about membership or wellness services?
        Contact the FemFit team.
      </p>

      <a class="primary-btn"
         href="https://wa.me/923104378616?text=Hello%20FemFit!%20I%20would%20like%20more%20information."
         target="_blank" rel="noopener noreferrer">
        CONTACT FEMFIT ↗
      </a>
    </section>

  </main>

  <!-- FOOTER -->
  <footer>
    <a class="logo" href="#home">FEM<span>FIT</span></a>
    <p>Women's Fitness & Wellness | Bahawalpur</p>

    <a href="https://instagram.com/femfitladiesgym"
       target="_blank" rel="noopener noreferrer">
      INSTAGRAM ↗
    </a>

    <a href="tel:03104378616">0310 4378616</a>

    <small>© 2026 FEMFIT. UNOFFICIAL WEBSITE DEMO.</small>
  </footer>
`

// MEMBERSHIP PRICE CALCULATOR
const packageSelect = document.querySelector('#package')
const durationSelect = document.querySelector('#duration')
const membershipPrice = document.querySelector('#membership-price')
const totalPrice = document.querySelector('#total-price')

const registrationFee = 10000

const prices = {
  Student: {
    3: 12000,
    6: 24000,
    12: 46000
  },
  Regular: {
    3: 18000,
    6: 36000,
    12: 70000
  }
}

function formatPrice(amount) {
  return 'Rs. ' + amount.toLocaleString('en-PK')
}

function updatePrice() {
  const selectedPackage = packageSelect.value
  const selectedDuration = durationSelect.value

  if (
    selectedPackage &&
    selectedDuration &&
    prices[selectedPackage]
  ) {
    const fee = prices[selectedPackage][selectedDuration]

    membershipPrice.textContent = formatPrice(fee)
    totalPrice.textContent = formatPrice(fee + registrationFee)
  } else {
    membershipPrice.textContent = 'Select a plan'
    totalPrice.textContent = 'Select a plan'
  }
}

packageSelect.addEventListener('change', updatePrice)
durationSelect.addEventListener('change', updatePrice)

// WHATSAPP REGISTRATION FORM
const registrationForm = document.querySelector('#registration-form')

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault()

  const name = document.querySelector('#fullName').value.trim()
  const age = document.querySelector('#age').value
  const phone = document.querySelector('#phone').value.trim()
  const branch = document.querySelector('#branch').value
  const selectedPackage = packageSelect.value
  const selectedDuration = durationSelect.value

  if (!prices[selectedPackage] || !prices[selectedPackage][selectedDuration]) {
    alert('Please select a valid membership package and duration.')
    return
  }

  const fee = prices[selectedPackage][selectedDuration]
  const total = fee + registrationFee

  const message = `
Hello FemFit Ladies Gym!

I would like to register for a membership.

CUSTOMER DETAILS
Name: ${name}
Age: ${age}
WhatsApp Number: ${phone}

MEMBERSHIP DETAILS
Branch: ${branch}
Package: ${selectedPackage}
Duration: ${selectedDuration} Months

Membership Fee: ${formatPrice(fee)}
Registration Fee: ${formatPrice(registrationFee)}
Total: ${formatPrice(total)}

Please contact me to confirm my registration.

Thank you!
  `

  const whatsappURL =
    'https://wa.me/923104378616?text=' +
    encodeURIComponent(message)

  window.open(whatsappURL, '_blank')
})






