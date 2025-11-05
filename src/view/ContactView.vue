<script setup>
import { ref, computed } from 'vue' 

const contactImage = new URL('@/assets/images/contact-image.png', import.meta.url).href

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  country: 'in' 
})


const countries = [
  { code: 'in', dial: '+91', name: 'India', flag: new URL('@/assets/images/flag-in.svg', import.meta.url).href },
  { code: 'us', dial: '+99', name: 'USA', flag: new URL('@/assets/images/flag-usa.svg', import.meta.url).href },
  { code: 'gb', dial: '+44', name: 'UK', flag: new URL('@/assets/images/flag-uk.svg', import.meta.url).href },
]


const dropdownOpen = ref(false)


const selectedCountry = computed(() =>
  countries.find(c => c.code === form.value.country)
)

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}

const isVisible = ref(false)

function onVisibilityChanged(isVisibleNow, entry) {
  isVisible.value = isVisibleNow
  if (isVisibleNow) {
    entry.target.classList.add('active')
  } else {
    entry.target.classList.remove('active')
  }
}
</script>

<template>
  <section class="contact-section container">
    <div class="contact-left">
      <article class="box-to-observe" v-observe-visibility="{ callback: onVisibilityChanged, threshold: 0.6 }">
        <img :src="contactImage" alt="Contact Image" />
        <span>Let’s connect and <br> create the next big  <br> thing in tech</span>
      </article>
    </div>

    <div class="contact-right">
      <span>BUILD THE FUTURE WITH US</span>
      <h2>Contact Us</h2>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Name*</label>
          <input
           v-model="form.name"
           placeholder="Enter Your Name"
           class="form-control"
           required />
        </div>

        <div class="form-group">
          <label>Email*</label>
          <input
           v-model="form.email"
           class="form-control"
           placeholder="Enter Your Email"
           required />
        </div>

        
        <div class="form-group ">
             <label>Phone Number*</label>
             <div class="phone-wrapper">
            <div class="country-dropdown" @click="dropdownOpen = !dropdownOpen">
            <img :src="selectedCountry.flag" class="flag" alt="flag" />
            <span class="dial">{{ selectedCountry.dial }}</span>
            <span class="arrow">▾</span>

            <ul v-if="dropdownOpen" class="dropdown-list">
              <li
                v-for="country in countries"
                :key="country.code"
                @click.stop="form.country = country.code; dropdownOpen = false"
              >
                <img :src="country.flag" class="flag" alt="" />
                <span>{{ country.name }} ({{ country.dial }})</span>
              </li>
            </ul>
          </div>

          <input
            type="tel"
            v-model="form.phone"
            placeholder="Enter your phone number"
            class="form-control"
            required
          />
             </div>
          
        </div>

        <div class="form-group">
          <label>Message</label>
          <textarea
            v-model="form.message"
            rows="4"
            placeholder="Write your message"
            class="form-control"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn-common arrow-round">Send Message</button>
      </form>
    </div>
  </section>
</template>


