const products = [
      { name: "T-Shirt", category: "clothing", price: 499, image: "https://5.imimg.com/data5/ANDROID/Default/2023/2/KO/BV/FG/153179165/product-jpeg-500x500.jpg"},
      { name: "Dell Laptop", category: "tech", price: 64999, image: "https://m.media-amazon.com/images/I/51tRMZKn4tL.jpg" },
      { name: "Bread", category: "grocery", price: 40, image: "https://www.seriouseats.com/thmb/a70rPcJcKQcnPyqrQ9y4rQkDx7Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240306-SEA-DebbieWee-milkbread-step13-1nolid-909fb1a05c3648378d008648e1b6ddbe.jpg" },
      { name: "Headphones", category: "tech", price: 1299, image: "https://thekairoshome.com/wp-content/uploads/2024/11/1-1.jpg" },
      { name: "Jeans", category: "clothing", price: 1299, image: "https://m.media-amazon.com/images/I/51gMD8DGiSL._UY1100_.jpg" },
      { name: "Sugar 1kg", category: "grocery", price: 40, image: "https://bodomama.com/wp-content/uploads/2024/02/sugar-1kg-1000x1000-1.jpg" },
      { name: "Suit", category: "clothing", price: 4599, image: "https://www.pnrao.com/wp-content/uploads/2023/11/Studio-Session-1009.webp" },
      { name: "Smart Watch", category: "tech", price: 54999, image: "https://suprememobiles.in/cdn/shop/files/2_9c78017c-f59c-4547-8ca7-67d518f3e3b8.png?v=1701846865" },
      { name: "Honey", category: "grocery", price: 140, image: "https://m.media-amazon.com/images/I/71O4OnjaHVL._UF1000,1000_QL80_.jpg" },
      { name: "Headset", category: "tech", price: 1299, image: "https://media.tatacroma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/308673_jxaozj.png" },
      { name: "Embriodery kurta", category: "clothing", price: 1299, image: "https://img.faballey.com/images/Product/MKS00376Z/3.jpg" },
      { name: "Blackgram", category: "grocery", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUghyiH_mXaI5ZH6re7gPsV87nMo6NeNYPiw&s" },
      { name: "Shirt", category: "clothing", price: 499, image: "https://www.blackstitch.in/cdn/shop/files/LTST_TRND_PL_BROWN_1_5333916d-e7f5-4b24-ad07-b834309650f0.webp?v=1727152908" },
      { name: "Airpods", category: "tech", price: 54999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyym0Ol1OuMgioelBqkIDYWCg_jC8VN0tIA&s" },
      { name: "Brinjal 1kg", category: "grocery", price: 40, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuw4gEu_Ppt2TqlzST2nbg2YaRXdzVxSXF6g&s" },
      { name: "Neckband", category: "tech", price: 499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQagqeSiWXhsuOLEhXMNX93Bmcqrbj3zB-Q&s" },
      { name: "Black Bodycon", category: "clothing", price: 2999, image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2025/APRIL/23/vGGPZPi3_218d5965e97a4d80b0d8df8e9b0e2795.jpg" },
      { name: "Curd", category: "grocery", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tea6OFM6KiTDwMe0ENPjf4cqmITvakWuxw&s" },
      { name: "Kurta Set", category: "clothing", price: 499, image: "https://assets.ajio.com/medias/sys_master/root/20231102/mmWP/654378beafa4cf41f56eaaa9/-473Wx593H-466766854-black-MODEL.jpg" },
      { name: "Laptop Screen Guard", category: "tech", price: 899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQ29mrMbXt7y3oLDzenDOFDe1g4r3CeyQCg&s" },
      { name: "Tomatoes 1kg", category: "grocery", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXbdAvhUzEfr5X36ipO1Cn6IEFmaV7l5uWw&s" },
      { name: "Earphones", category: "tech", price: 599, image: "https://computechstore.in/wp-content/uploads/2024/03/Honeywell-Moxie-V50-Wired-Earphone-Black-.jpg" },
      { name: "Long Top", category: "clothing", price: 499, image: "https://www.apparelcandy.com/cdn/shop/files/YMT20005V-DJ-4-removebg-preview_800x.png?v=1727665040" },
      { name: "Milk", category: "grocery", price: 60, image: "https://img.freepik.com/premium-vector/realistic-milk-splash-full-transparent-bottle-milk-with-lot-droplets-blue-background_212889-4424.jpg?w=360" },
      { name: "Hoodie", category: "clothing", price: 899, image: "https://cdn-images.farfetch-contents.com/27/48/39/46/27483946_57262455_600.jpg" },
      { name: "Formal Shirt", category: "clothing", price: 749, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUD6H9XP0Xdio2yXyYLizZTCson6cv_GTHtQ&s" },
      { name: "Skirt", category: "clothing", price: 599, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnOs08z7jrKRmMP2lOG3lpPphjcbbfKdUQw&s" },
      { name: "Smartphone", category: "tech", price: 23999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8xEHyZoTfv97MUoCvUgZK_XqFimG3AEp9g&s" },
      { name: "Smartwatch", category: "tech", price: 4999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0-VLJgjJL9ylZxPzq3HOpvP9Ndcx0bhkFQ&s" },
      { name: "Eggs (12 Pack)", category: "grocery", price: 70, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NYOP0WdYbSJddEnj4kbiQWoD1W2PsDOEzw&s" },
      { name: "Rice (1kg)", category: "grocery", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ljz2j4FkCfLkIQ-bV4FlQLintKdFwtZWKw&s" },
      { name: "Lipton Green Tea", category: "grocery", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7qS2WqCYBZaVDrK2r1lsszwIUkoIi5IRyA&s" },
      { name: "Apples (1kg)", category: "grocery", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-7qdggKNdLXBORgy4dVT2nTtAihCAnY1Fg&s" },
      { name: "Fortune Oil (1L)", category: "grocery", price: 160, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhSzD4srbX-rESY7FBwMuoiUmEdOfslTodw&s" },
      { name: "Keyboard", category: "tech", price: 899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReW-UMkfWintNFu-tvIavy-DgopvOXSuJJLA&s" },
      { name: "Mouse", category: "tech", price: 399, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZO-OHVBCnawWFfeBFA-Y4SQIUbDFzg87FA&s" },
      { name: "Tablet", category: "tech", price: 15999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS96jJnj4Nt3kN_j_oh0KPLdyubbPFKegh-g&s" },
      { name: "Jacket", category: "clothing", price: 1399, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tck2KmJGbRqFQhHvL-S3NRLHGYE13qVqOg&s" }

    ];

    let cart = [];
    const productGrid = document.getElementById("productGrid");
    const searchInput = document.getElementById("searchInput");
    const sortFilter = document.getElementById("sortFilter");
    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");
    const categoryChecks = document.querySelectorAll(".categoryCheck");
    const cartCount = document.getElementById("cartCount");
    const cartModal = document.getElementById("cartModal");
    const cartItems = document.getElementById("cartItems");

    function renderProducts(list) {
      productGrid.innerHTML = list.map((p, i) => `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <span class="tag">${p.category}</span>
          <button class="add-cart" onclick="addToCart(${i})">Add to Cart</button>
        </div>
      `).join("");
    }

    function updateCartUI() {
      cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
      cartItems.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
          <span>${item.name} (₹${item.price})</span>
          <div class="cart-actions">
            <button onclick="changeQty(${idx}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${idx}, 1)">+</button>
            <button onclick="removeItem(${idx})">🗑️</button>
          </div>
        </div>
      `).join("");
    }

    function toggleCart() {
      cartModal.style.display = cartModal.style.display === "flex" ? "none" : "flex";
      updateCartUI();
    }

    function addToCart(index) {
      const product = products[index];
      const existing = cart.find(item => item.name === product.name);
      if (existing) existing.qty++;
      else cart.push({ ...product, qty: 1 });
      updateCartUI();
    }

    function changeQty(idx, delta) {
      cart[idx].qty += delta;
      if (cart[idx].qty <= 0) cart.splice(idx, 1);
      updateCartUI();
    }

    function removeItem(idx) {
      cart.splice(idx, 1);
      updateCartUI();
    }

    function filterAndSort() {
      const keyword = searchInput.value.toLowerCase();
      const sort = sortFilter.value;
      const maxPrice = parseInt(priceRange.value);

      const activeCategories = Array.from(categoryChecks)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

      let filtered = products.filter(p => {
        const matchesKeyword = p.name.toLowerCase().includes(keyword);
        const matchesCategory = activeCategories.length === 0 || activeCategories.includes(p.category);
        const withinPrice = p.price <= maxPrice;
        return matchesKeyword && matchesCategory && withinPrice;
      });

      if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
      else if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
      else if (sort === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name));
      else if (sort === "name-desc") filtered.sort((a, b) => b.name.localeCompare(a.name));

      renderProducts(filtered);
    }

    searchInput.addEventListener("input", filterAndSort);
    sortFilter.addEventListener("change", filterAndSort);
    priceRange.addEventListener("input", () => {
      priceValue.textContent = priceRange.value;
      filterAndSort();
    });
    categoryChecks.forEach(cb => cb.addEventListener("change", filterAndSort));

    renderProducts(products);