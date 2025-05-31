 // Mobile Menu Toggle
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const mobileMenu = document.getElementById('mobile-menu');
 const dropdownToggle = document.getElementById('dropdown-toggle');
 const dropdownMenu = document.getElementById('dropdown-menu');

 mobileMenuButton.addEventListener('click', () => {
   mobileMenu.classList.toggle('hidden');
   mobileMenuButton.innerHTML = mobileMenu.classList.contains('hidden') 
     ? '<i class="fas fa-bars"></i>' 
     : '<i class="fas fa-times"></i>';
 });

 // Mobile Dropdown Toggle
 dropdownToggle.addEventListener('click', () => {
   dropdownMenu.classList.toggle('hidden');
   const icon = dropdownToggle.querySelector('i');
   icon.classList.toggle('rotate-180');
 });

 // Theme Toggle
 const themeToggle = document.getElementById('theme-toggle');
 const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
 
 const toggleTheme = () => {
   document.documentElement.classList.toggle('dark');
   localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
 };
 
 themeToggle?.addEventListener('click', toggleTheme);
 mobileThemeToggle?.addEventListener('click', toggleTheme);

 // Set initial theme
 if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   document.documentElement.classList.add('dark');
 }

 // Navbar scroll effect
 window.addEventListener('scroll', () => {
   const navbar = document.getElementById('navbar');
   if (window.scrollY > 50) {
     navbar.classList.add('py-3', 'shadow-md');
     navbar.classList.remove('py-6');
   } else {
     navbar.classList.remove('py-3', 'shadow-md');
     navbar.classList.add('py-6');
   }
 });