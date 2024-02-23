function toggleCategory(category) {
    const categoryElement = document.getElementById(category);
    const categories = document.querySelectorAll('.category');

    categories.forEach(cat => {
        if (cat.id !== category) {
            cat.style.display = 'none';
        }
    });

    if (categoryElement.style.display === 'none' || categoryElement.style.display === '') {
        showCategory(category);
    } else {
        hideCategory(category);
    }
}

function showCategory(category) {
    const categoryElement = document.getElementById(category);
    const servicesCategory = services[category];
    categoryElement.innerHTML = '';
    servicesCategory.forEach(service => {
        const serviceHTML = `
            <div class="service">
                <h2>${service.name}</h2>
                <p>${service.description}</p>
                <p>Price: $${service.price}</p>
            </div>
        `;
        categoryElement.insertAdjacentHTML('beforeend', serviceHTML);
    });
    categoryElement.style.display = 'block';
}

function hideCategory(category) {
    const categoryElement = document.getElementById(category);
    categoryElement.style.display = 'none';
}

const services = {
    "identity-corporate": [
        { name: "New Logo", description: "Design of a unique logo that represents the brand, includes identity manual and 5 applications.", price: 720 },
        { name: "Corporate Identity Redesign", description: "Update of the logo and visual identity elements of the brand.", price: 600 },
        { name: "Identity Manual", description: "Detailed document that establishes the guidelines of the brand's visual identity.", price: 500 },
        { name: "Logo", description: "Design of a simple and memorable logo for the brand.", price: 350 },
        { name: "Logo Vectorization", description: "Conversion of the logo to vector format for use in different media.", price: 130 },
        { name: "Stationery Design", description: "Creation of corporate stationery, including business cards, envelopes, etc.", price: 220 },
        { name: "Key Visual", description: "Creation of a key image that represents the essence of the brand.", price: 360 },
        { name: "Slogan", description: "Development of a memorable phrase that summarizes the brand's identity.", price: 280 },
        { name: "Corporate / Institutional Naming", description: "Creation of a unique and relevant name for the company.", price: 300 }
    ],
    "merchandising": [
        { name: "Agenda", description: "Customized agenda with the brand's logo.", price: 140 },
        { name: "Buttons (5 versions)", description: "Promotional buttons with personalized design.", price: 130 },
        { name: "Jumping Jack", description: "Promotional jumping figure for point of sale.", price: 170 },
        { name: "Cell Phone Case", description: "Customized case for mobile phones.", price: 170 },
        { name: "Plotter for floors / walls", description: "Design and printing of graphics for promotion on floors or walls.", price: 220 },
        { name: "Souvenir Package (Keychains, pens, mugs, stickers, etc.)", description: "Set of various promotional items.", price: 180 },
        { name: "Stand Design", description: "Design of stands for fairs and promotional events.", price: 600 },
        { name: "Uniform Design", description: "Design of corporate uniforms for employees.", price: 400 },
        { name: "Backing Design", description: "Design of graphic backings for exhibitions and events.", price: 300 }
    ],
    "outdoor-advertising": [
        { name: "Billboard", description: "Advertising billboards for installation in strategic locations.", price: 250 },
        { name: "Mupi", description: "Advertising on urban advertising panels.", price: 320 },
        { name: "Banner", description: "Promotional banners for events and exhibitions.", price: 250 },
        { name: "Billboard", description: "Large format advertising signs.", price: 350 }
    ],
    "print": [
        { name: "Poster", description: "Printing of promotional posters.", price: 220 },
        { name: "Notice", description: "Advertising announcements for printed media.", price: 250 },
        { name: "Bag", description: "Customized bags with the brand's logo.", price: 70 },
        { name: "Packaging Design + Mockup", description: "Design and visual presentation of packaging for products.", price: 480 },
        { name: "Product Catalog per page", description: "Creation of detailed product catalogs.", price: 115 },
        { name: "Mail", description: "Design of promotional email.", price: 90 },
        { name: "Editorial Design per page (Book)", description: "Layout design for books.", price: 3 },
        { name: "Editorial Design per page (Newspaper and Magazine)", description: "Layout design for newspapers and magazines.", price: 40 },
        { name: "Cover Design", description: "Design of covers for books and magazines.", price: 300 },
        { name: "Exhibitor", description: "Design of exhibitors for point of sale.", price: 200 },
        { name: "Flyer per page", description: "Design of promotional flyers.", price: 260 },
        { name: "Invitation", description: "Design of invitations for corporate events.", price: 60 },
        { name: "Brochure", description: "Information brochures about the company or products.", price: 250 },
        { name: "Event Program", description: "Design of programs for events and conferences.", price: 100 },
        { name: "Totem", description: "Vertical signage for events and exhibitions.", price: 400 },
        { name: "Flyer", description: "Design of promotional flyers.", price: 170 }
    ],
    "web-design": [
        { name: "Landing Page Design", description: "Design of a landing page to capture potential customers.", price: 500 },
        { name: "Corporate Web Design", description: "Design of a complete website with up to 5 internal pages.", price: 950 },
        { name: "Animated Banner", description: "Creation of animated banners for the web.", price: 190 },
        { name: "Ecommerce", description: "Development of online store for product sales.", price: 1300 },
        { name: "Management and development of Google Ads advertising campaigns", description: "Management and optimization of advertising campaigns on Google Ads.", price: 800 },
        { name: "Monthly Web Master", description: "Monthly maintenance of the website.", price: 350 },
        { name: "SEO Strategy on existing website", description: "Improvement of search engine positioning for an existing website.", price: 850 },
        { name: "SEO Strategy on new website", description: "Optimization for search engines on a new website.", price: 950 }
    ],
    "social-media": [
        { name: "Grid Design", description: "Design of the visual structure of social media feeds.", price: 550 },
        { name: "Single Post", description: "Design and publication of a single post on social media.", price: 125 },
        { name: "Profile Creation", description: "Configuration and customization of profiles on social media.", price: 180 },
        { name: "Avatar", description: "Design of profile picture for social media.", price: 30 },
        { name: "Creation of tiktok/reel video x 30 seconds", description: "Production of short videos for platforms like TikTok or Instagram Reels.", price: 180 },
        { name: "Creation of tiktok/reel video x 60 seconds", description: "Production of longer videos for platforms like TikTok or Instagram Reels.", price: 220 }
    ]
};
