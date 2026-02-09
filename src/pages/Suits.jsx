import { useState } from 'react';

function Suits() {
  const [selectedImage, setSelectedImage] = useState(null);

  const suitCategories = [
    {
      category: 'Classic & Core Suits',
      description: 'The suits that define Spider-Man and his early journey.',
      suits: [
        {
          name: 'Classic Red & Blue',
          description: 'The original look: simple, iconic, and recognized everywhere.',
          abilities: 'Enhanced mobility, web-slinging precision',
          image: 'https://wallpapercave.com/wp/wp8945581.jpg'
        },
        {
          name: 'Homemade Suit',
          description: 'A DIY suit made from everyday clothes before upgrades and tech.',
          abilities: 'Basic protection, improvised web-shooters',
          image: 'https://www.geekalerts.com/u/Spider-Man-Homemade-Suit-Version-Sixth-Scale-Figure-featured.jpg'
        },
        {
          name: 'Wrestling Suit',
          description: 'One of the earliest suits used before Spider-Man became a true hero.',
          abilities: 'Basic mobility, early web-slinging',
          image: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2022/11/spidermanwrestlingsuit.jpg?q=50&fit=crop&w=825&dpr=1.5'
        },
        {
          name: 'Black Symbiote',
          description: 'A darker suit with extra power, but it changes how Spider-Man behaves.',
          abilities: 'Increased strength, organic webbing, enhanced durability',
          image: 'https://i.redd.it/mcu-symbiote-spider-man-spider-man-pc-mod-by-tangoteds-hq-v0-18a0cbt1p9ca1.png?width=3840&format=png&auto=webp&s=d49e133386e5558c65ec0d60740e8657b2365e61'
        }
      ]
    },
    {
      category: 'Tech & Upgraded Suits',
      description: 'Advanced features like AI support, armor, and specialized tools.',
      suits: [
        {
          name: 'Stark Suit',
          description: 'A high-tech suit with smart features and improved web options.',
          abilities: 'AI assistance, enhanced web types, HUD display',
          image: 'https://i.ytimg.com/vi/h-X7fTCxfv8/maxresdefault.jpg'
        },
        {
          name: 'Iron Spider',
          description: 'Heavy armor with mechanical spider arms for combat and mobility.',
          abilities: 'Mechanical arms, enhanced protection, AI assistance',
          image: 'https://i.pinimg.com/1200x/bb/2d/8d/bb2d8de91d10b513e907a851ec18226e.jpg'
        },
        {
          name: 'Integrated Suit',
          description: 'A mix of advanced tech and special enhancements from Spider-Man\'s allies.',
          abilities: 'Multi-tech integration, enhanced durability',
          image: 'https://i.ytimg.com/vi/-S8WNvsqyg0/maxresdefault.jpg'
        },
        {
          name: 'Advanced Suit',
          description: 'Modern upgraded design known for its bold white spider symbol.',
          abilities: 'Enhanced web types, better durability, sleek design',
          image: 'https://preview.redd.it/hot-take-i-actually-prefer-the-advanced-suit-to-the-classic-v0-zm8rbtes1l9b1.jpg?width=1080&crop=smart&auto=webp&s=d203ea4843f0363c4ebc6339f796b4bce806d2a3'
        }
      ]
    },
    {
      category: 'Stealth & Tactical Suits',
      description: 'Built for missions where Spider-Man needs to stay unseen or survive tougher fights.',
      suits: [
        {
          name: 'Stealth Suit',
          description: 'Designed for night operations and low-visibility missions.',
          abilities: 'Sound dampening, night vision, minimal detection',
          image: 'https://carboncostume.com/wordpress/wp-content/uploads/2019/08/spider-man-stealth-suit.jpg'
        },
        {
          name: 'Big Time Stealth',
          description: 'A stealth-focused suit with special visual modes.',
          abilities: 'Invisibility tech, enhanced stealth capabilities',
          image: 'https://majorspoilers.com/wp-content/uploads/2020/02/Spider-Man-PS4-Stealth-Big-Time.jpg'
        },
        {
          name: 'Spider-Armor Mk I-IV',
          description: 'Armor-style suits made to reduce damage in dangerous fights.',
          abilities: 'Heavy protection, damage resistance',
          image: 'https://preview.redd.it/am-i-the-only-person-who-would-think-that-the-spider-man-mk-v0-psbs7omgkyfb1.jpg?width=640&crop=smart&auto=webp&s=28af9bdbfa0712bb523b7e10637b07ce196fc272'
        },
        {
          name: 'Anti-Ock Suit',
          description: 'A suit built specifically to counter Doctor Octopus-level threats.',
          abilities: 'EMP resistance, enhanced strength',
          image: 'https://preview.redd.it/is-there-a-lore-reason-for-why-spider-man-didnt-repair-the-v0-5grra1nlw0ga1.jpg?width=640&crop=smart&auto=webp&s=7bd2aba53b66cf6a52efec99f7f87d802caa385f'
        }
      ]
    },
    {
      category: 'Spider-Verse Suits',
      description: 'Suits from alternate universes where Spider-Man is totally different.',
      suits: [
        {
          name: 'Miles Morales',
          description: 'Black and red design with unique energy-based abilities.',
          abilities: 'Venom strike, camouflage, bio-electric powers',
          image: 'https://ecommerce.datablitz.com.ph/cdn/shop/products/spiderman-miles-morales-screenshot-03-disclaimer-en-01oct20_d319d1a8-e3f5-4556-8dc7-54147f9584d6_800x.png?v=1676796665'
        },
        {
          name: 'Spider-Gwen',
          description: 'White, pink, and black suit from an alternate Spider-world.',
          abilities: 'Enhanced agility, web-slinging, spider-sense',
          image: 'https://wallpapers.com/images/featured/spider-gwen-pictures-6vhxfh0g71dv3tac.jpg'
        },
        {
          name: 'Spider-Man 2099',
          description: 'A futuristic Spider-Man with sharper design and a darker style.',
          abilities: 'Talons, enhanced vision, futuristic tech',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6k8Quy4LqHN9BGGLaeXBqjrsTHW3HxBUfg&s'
        },
        {
          name: 'Spider-Man Noir',
          description: 'A black suit with trench coat and goggles, set in a darker era.',
          abilities: 'Stealth, detective skills, 1930s weaponry',
          image: 'https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/07/spider-man-noir-spider-verse.jpg'
        },
        {
          name: 'Spider-Verse Variants',
          description: 'Unique suits from across dimensions—each with their own style.',
          abilities: 'Varies by universe and Spider-person',
          image: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/5516f9ee-f674-4470-9dda-4cd5937fc1ff/sony-pictures-reportedly-shifting-focus-to-spider-man-variants-for-future-marvel-movies.jpg'
        }
      ]
    },
    {
      category: 'Symbiote & Dark Variants',
      description: 'Suits connected to symbiotes and other darker transformations.',
      suits: [
        {
          name: 'Symbiote Variants',
          description: 'Different versions of the black suit seen across stories.',
          abilities: 'Enhanced strength, organic webbing, shape-shifting',
          image: 'https://cdna.artstation.com/p/assets/images/images/069/524/056/4k/dustin-brown-msm2-dustinbrown-blacksuit-screenshot-01.jpg?1700355192'
        },
        {
          name: 'Anti-Venom Style',
          description: 'A lighter symbiote-inspired look with a different effect.',
          abilities: 'Healing powers, symbiote immunity',
          image: 'https://i.ytimg.com/vi/Xih309j94sU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmgGPFffGTXOWudi1pLYbMie1VTg'
        },
        {
          name: 'Carnage-Inspired',
          description: 'A chaotic red symbiote style seen in special versions.',
          abilities: 'Extreme aggression, shape-shifting weapons',
          image: 'https://i.ytimg.com/vi/le1B0c-Xvz8/maxresdefault.jpg'
        }
      ]
    },
    {
      category: 'Movie Suits',
      description: 'The most famous suits seen across Spider-Man films.',
      suits: [
        {
          name: 'Raimi Suit',
          description: 'Classic raised-webbing style loved by many fans (Tobey Maguire).',
          abilities: 'Organic webbing, enhanced strength',
          image: 'https://cdn.mos.cms.futurecdn.net/zx69JJ69dauThYPkvjcno4.jpg'
        },
        {
          name: 'Amazing Spider-Man',
          description: 'Sleek design with larger eyes and modern web pattern (Andrew Garfield).',
          abilities: 'Mechanical web-shooters, enhanced mobility',
          image: 'https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/22016922/msm_remaster_amazingsuit_legal2.jpg?q=50&fit=crop&w=825&dpr=1.5'
        },
        {
          name: 'MCU Suits',
          description: 'A series of upgraded suits made for higher-level threats (Tom Holland).',
          abilities: 'AI support, multiple web types, stark tech',
          image: 'https://w0.peakpx.com/wallpaper/304/558/HD-wallpaper-far-from-home-disney-far-from-home-marvel-mcu-red-and-black-sony-spider-man-spiderman-spiderman-suit.jpg'
        },
        {
          name: 'Final Swing Suit',
          description: 'A clean, classic-style suit with a strong comic-inspired look.',
          abilities: 'Perfect balance of classic and modern',
          image: 'https://i.redd.it/zoqefl7sos7b1.png'
        }
      ]
    },
    {
      category: 'Game & Special Suits',
      description: 'Unique suits popular in games and special Spider-Man storylines.',
      suits: [
        {
          name: 'Scarlet Spider',
          description: 'Hoodie-style suit with a bold, street look.',
          abilities: 'Impact webbing, stinger projectiles',
          image: 'https://cdn.wallpapersafari.com/87/7/B1YPJD.jpg'
        },
        {
          name: 'Last Stand',
          description: 'A battle-worn future version built for survival.',
          abilities: 'Enhanced durability, combat experience',
          image: 'https://i.pinimg.com/736x/b8/8a/2a/b88a2a5eb04eadb7211e08e54901c523.jpg'
        },
        {
          name: 'Negative Suit',
          description: 'Inverted-color style inspired by special story arcs.',
          abilities: 'Negative energy manipulation',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9miI2IQvthehshs7W4aRDjLZX2AyQifOzTw&s'
        },
        {
          name: 'Spider-Punk',
          description: 'A rebellious punk-style Spider-Man from the Spider-Verse.',
          abilities: 'Guitar weapon, punk attitude, web-slinging',
          image: 'https://i.pinimg.com/736x/29/ca/08/29ca08cd953302728f3d5c4f29e788e9.jpg'
        },
        {
          name: 'Velocity Suit',
          description: 'A speed-focused suit made for fast movement and high energy.',
          abilities: 'Enhanced speed, kinetic energy absorption',
          image: 'https://i.redd.it/dy6ifjctyya11.png'
        }
      ]
    }
  ];

  return (
    <div className="container">
      <div className="section-header">
        <h2>Suit Gallery</h2>
        <p>Every suit tells a story. Every upgrade serves a purpose.</p>
      </div>

      {suitCategories.map((category, catIndex) => (
        <div key={catIndex} style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              fontSize: '2rem', 
              color: '#fff', 
              marginBottom: '0.5rem',
              borderLeft: '4px solid var(--spider-red)',
              paddingLeft: '1rem'
            }}>
              {category.category}
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              fontSize: '1rem',
              paddingLeft: '1rem'
            }}>
              {category.description}
            </p>
          </div>

          <div className="card-grid">
            {category.suits.map((suit, index) => (
              <div key={index} className="card suit-card">
                <div 
                  className="card-image" 
                  style={{ 
                    background: suit.image ? `url(${suit.image})` : suit.gradient,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: suit.image ? '#000000' : 'transparent',
                    cursor: suit.image ? 'pointer' : 'default'
                  }}
                  onClick={() => suit.image && setSelectedImage(suit.image)}
                >
                </div>
                <div className="card-content">
                  <h3>{suit.name}</h3>
                  <p>{suit.description}</p>
                  <div style={{ 
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: 'rgba(30, 136, 229, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: '1px solid rgba(30, 136, 229, 0.3)'
                  }}>
                    <p style={{ fontSize: '0.9rem', color: '#64B5F6', margin: 0 }}>
                      <strong>⚡ Abilities:</strong> {suit.abilities}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '2rem',
            cursor: 'pointer'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'rgba(211, 47, 47, 0.9)',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              zIndex: 10000
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(211, 47, 47, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(211, 47, 47, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ✕
          </button>
          <img 
            src={selectedImage} 
            alt="Suit preview"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 0 50px rgba(211, 47, 47, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="glass-box" style={{ 
        marginTop: '4rem',
        textAlign: 'center',
        background: 'rgba(211, 47, 47, 0.1)',
        border: '1px solid rgba(211, 47, 47, 0.3)'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
          🕷️ SUIT EVOLUTION
        </h2>
        <p style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.9)' }}>
          From homemade fabric to cutting-edge tech, every suit represents growth, adaptation, and the endless fight to protect those who can't protect themselves.
        </p>
      </div>
    </div>
  );
}

export default Suits;
