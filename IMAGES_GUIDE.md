# Adding Spider-Man Images to Your Site

## Where to Find Images

### Free & Legal Sources:
1. **Unsplash** - https://unsplash.com (search "spider web", "city", "hero")
2. **Pexels** - https://pexels.com (free stock photos)
3. **Pixabay** - https://pixabay.com (royalty-free images)
4. **Your Own Art** - Create or commission original Spider-Man inspired artwork

### Important Note:
Official Spider-Man images are copyrighted by Marvel/Sony. For a fan project:
- Use only for personal/educational purposes
- Don't use for commercial purposes
- Consider using inspired artwork instead of official movie stills

## How to Add Images

### 1. Add Images to Your Project

Create an images folder:
```
public/
  images/
    suits/
      classic-suit.jpg
      symbiote-suit.jpg
      iron-spider.jpg
    villains/
      green-goblin.jpg
      doc-ock.jpg
      venom.jpg
    hero/
      spiderman-hero.jpg
```

### 2. Update Components to Use Images

#### For Suits Page (src/pages/Suits.jsx):

Replace the emoji card-image div with:
```jsx
<div className="card-image">
  <img 
    src="/images/suits/classic-suit.jpg" 
    alt={suit.name}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
```

#### For Villains Page (src/pages/Villains.jsx):

Replace the emoji with:
```jsx
<div className="card-image">
  <img 
    src={`/images/villains/${villain.name.toLowerCase().replace(' ', '-')}.jpg`}
    alt={villain.name}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
```

#### For Home Page Hero Section:

Add a background image:
```jsx
<section className="hero" style={{
  backgroundImage: 'url(/images/hero/spiderman-hero.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
```

### 3. Recommended Image Sizes

- **Hero Banner**: 1920x1080px (landscape)
- **Card Images**: 600x400px (landscape)
- **Icons/Emojis**: Keep as is or use 200x200px (square)

### 4. Optimize Images

Before adding images:
1. Resize to recommended dimensions
2. Compress using tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
3. Use JPG for photos, PNG for graphics with transparency

## Alternative: Use Placeholder Services

For testing, use placeholder services:

```jsx
<img 
  src="https://via.placeholder.com/600x400/D32F2F/FFFFFF?text=Spider-Man"
  alt="Spider-Man"
/>
```

Or use gradient backgrounds (already implemented with emojis).
