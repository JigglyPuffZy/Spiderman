import { useState } from 'react';

function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const movieCategories = [
    {
      category: 'Tobey Maguire Trilogy',
      era: '2002-2007',
      description: 'The original trilogy that started it all',
      color: '#D32F2F',
      gradient: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
      movies: [
        {
          title: 'Spider-Man',
          year: 2002,
          rating: '⭐ 7.4/10',
          description: 'After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.',
          poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg',
          director: 'Sam Raimi',
          cast: 'Tobey Maguire, Willem Dafoe, Kirsten Dunst',
          boxOffice: '$825M',
          tagline: 'With great power comes great responsibility'
        },
        {
          title: 'Spider-Man 2',
          year: 2004,
          rating: '⭐ 7.5/10',
          description: 'Peter Parker is beset with troubles in his failing personal life as he battles a former brilliant scientist named Otto Octavius.',
          poster: 'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          director: 'Sam Raimi',
          cast: 'Tobey Maguire, Alfred Molina, Kirsten Dunst',
          boxOffice: '$795M',
          tagline: 'There\'s a hero in all of us'
        },
        {
          title: 'Spider-Man 3',
          year: 2007,
          rating: '⭐ 6.3/10',
          description: 'A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.',
          poster: 'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
          director: 'Sam Raimi',
          cast: 'Tobey Maguire, Thomas Haden Church, Topher Grace',
          boxOffice: '$895M',
          tagline: 'The greatest battle lies within'
        }
      ]
    },
    {
      category: 'Andrew Garfield Series',
      era: '2012-2014',
      description: 'A fresh take on the web-slinger',
      color: '#1E88E5',
      gradient: 'linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)',
      movies: [
        {
          title: 'The Amazing Spider-Man',
          year: 2012,
          rating: '⭐ 6.9/10',
          description: 'After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg',
          director: 'Marc Webb',
          cast: 'Andrew Garfield, Emma Stone, Rhys Ifans',
          boxOffice: '$758M',
          tagline: 'The untold story begins'
        },
        {
          title: 'The Amazing Spider-Man 2',
          year: 2014,
          rating: '⭐ 6.6/10',
          description: 'When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.',
          poster: 'https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_.jpg',
          director: 'Marc Webb',
          cast: 'Andrew Garfield, Emma Stone, Jamie Foxx',
          boxOffice: '$709M',
          tagline: 'His greatest battle begins'
        }
      ]
    },
    {
      category: 'Marvel Cinematic Universe',
      era: '2017-2021',
      description: 'Tom Holland\'s Spider-Man in the MCU',
      color: '#F9A825',
      gradient: 'linear-gradient(135deg, #F9A825 0%, #F57F17 100%)',
      movies: [
        {
          title: 'Spider-Man: Homecoming',
          year: 2017,
          rating: '⭐ 7.4/10',
          description: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_.jpg',
          director: 'Jon Watts',
          cast: 'Tom Holland, Michael Keaton, Robert Downey Jr.',
          boxOffice: '$880M',
          tagline: 'Homework can wait. The city can\'t.'
        },
        {
          title: 'Spider-Man: Far From Home',
          year: 2019,
          rating: '⭐ 7.4/10',
          description: 'Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.',
          poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
          director: 'Jon Watts',
          cast: 'Tom Holland, Jake Gyllenhaal, Zendaya',
          boxOffice: '$1.13B',
          tagline: 'It\'s time to step up'
        },
        {
          title: 'Spider-Man: No Way Home',
          year: 2021,
          rating: '⭐ 8.2/10',
          description: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',
          poster: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
          director: 'Jon Watts',
          cast: 'Tom Holland, Zendaya, Benedict Cumberbatch',
          boxOffice: '$1.92B',
          tagline: 'The Multiverse unleashed'
        }
      ]
    },
    {
      category: 'Spider-Verse (Animated)',
      era: '2018-Present',
      description: 'Groundbreaking animated adventures',
      color: '#E91E63',
      gradient: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)',
      movies: [
        {
          title: 'Spider-Man: Into the Spider-Verse',
          year: 2018,
          rating: '⭐ 8.4/10',
          description: 'Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg',
          director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
          cast: 'Shameik Moore, Jake Johnson, Hailee Steinfeld',
          boxOffice: '$384M',
          tagline: 'More than one wears the mask',
          awards: '🏆 Academy Award Winner'
        },
        {
          title: 'Spider-Man: Across the Spider-Verse',
          year: 2023,
          rating: '⭐ 8.7/10',
          description: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.',
          poster: 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
          director: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
          cast: 'Shameik Moore, Hailee Steinfeld, Oscar Isaac',
          boxOffice: '$690M',
          tagline: 'It\'s how you wear the mask that matters'
        },
        {
          title: 'Spider-Man: Beyond the Spider-Verse',
          year: 'TBA',
          rating: '⭐ Coming Soon',
          description: 'The epic conclusion to the groundbreaking Spider-Verse trilogy. Miles Morales\' journey continues as he faces his greatest challenge yet.',
          poster: 'https://i.redd.it/official-beyond-the-spider-verse-logo-v0-bo90x40tyv0b1.jpg?width=1170&format=pjpg&auto=webp&s=5c5e5c5e5c5e5c5e5c5e5c5e5c5e5c5e5c5e5c5e',
          director: 'TBA',
          cast: 'Shameik Moore, Hailee Steinfeld',
          boxOffice: 'TBA',
          tagline: 'The final chapter awaits',
          upcoming: true
        }
      ]
    }
  ];

  const allMovies = movieCategories.flatMap(cat => 
    cat.movies.map(movie => ({ ...movie, category: cat.category, categoryColor: cat.color }))
  );

  const filteredMovies = activeFilter === 'all' 
    ? allMovies 
    : allMovies.filter(m => m.category === activeFilter);

  return (
    <div className="container">
      <div className="section-header">
        <h2>🎬 Spider-Man Movies</h2>
        <p>From the big screen to your heart — every Spider-Man film journey</p>
      </div>

      {/* Filter Buttons */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '4rem'
      }}>
        <button
          onClick={() => setActiveFilter('all')}
          className="btn"
          style={{
            background: activeFilter === 'all' 
              ? 'linear-gradient(135deg, #D32F2F, #B71C1C)' 
              : 'rgba(255, 255, 255, 0.08)',
            color: 'white',
            border: activeFilter === 'all' ? 'none' : '1px solid rgba(255, 255, 255, 0.15)',
            padding: '0.75rem 1.5rem',
            fontSize: '0.9375rem'
          }}
        >
          All Movies
        </button>
        {movieCategories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveFilter(cat.category)}
            className="btn"
            style={{
              background: activeFilter === cat.category 
                ? cat.gradient 
                : 'rgba(255, 255, 255, 0.08)',
              color: 'white',
              border: activeFilter === cat.category ? 'none' : '1px solid rgba(255, 255, 255, 0.15)',
              padding: '0.75rem 1.5rem',
              fontSize: '0.9375rem'
            }}
          >
            {cat.category.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Movie Categories */}
      {movieCategories.map((category, catIndex) => {
        const categoryMovies = category.movies.filter(movie => 
          activeFilter === 'all' || activeFilter === category.category
        );
        
        if (categoryMovies.length === 0) return null;

        return (
          <div key={catIndex} style={{ marginBottom: '5rem' }}>
            <div style={{
              marginBottom: '2.5rem',
              padding: '2rem',
              background: `${category.gradient}15`,
              borderRadius: '20px',
              border: `1px solid ${category.color}30`,
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '2rem',
                    color: category.color,
                    marginBottom: '0.5rem',
                    fontWeight: '800',
                    textShadow: `0 0 20px ${category.color}80`
                  }}>
                    {category.category}
                  </h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '1rem',
                    margin: 0
                  }}>
                    {category.description}
                  </p>
                </div>
                <div style={{
                  padding: '0.75rem 1.5rem',
                  background: `${category.color}20`,
                  borderRadius: '100px',
                  border: `1px solid ${category.color}40`,
                  color: category.color,
                  fontWeight: '700',
                  fontSize: '0.9375rem'
                }}>
                  {category.era}
                </div>
              </div>
            </div>

            <div className="card-grid" style={{ gap: '2rem' }}>
              {categoryMovies.map((movie, movieIndex) => (
                <div
                  key={movieIndex}
                  className="card"
                  onClick={() => setSelectedMovie(movie)}
                  style={{
                    cursor: 'pointer',
                    opacity: movie.upcoming ? 0.85 : 1,
                    maxWidth: '320px',
                    margin: '0 auto'
                  }}
                >
                  {movie.upcoming && (
                    <div className="card-badge" style={{
                      background: 'linear-gradient(135deg, #F9A825, #F57F17)',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}>
                      Coming Soon
                    </div>
                  )}
                  {movie.awards && (
                    <div className="card-badge" style={{
                      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                      top: 'auto',
                      bottom: '1.25rem',
                      left: '1.25rem',
                      right: 'auto',
                      maxWidth: 'calc(100% - 2.5rem)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {movie.awards}
                    </div>
                  )}
                  <div
                    className="card-image"
                    style={{
                      backgroundImage: `url(${movie.poster})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      height: '480px',
                      width: '100%',
                      position: 'relative'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '40%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                    }}></div>
                  </div>
                  <div className="card-content">
                    <h3 style={{ marginBottom: '0.5rem' }}>{movie.title}</h3>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      marginBottom: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        color: category.color,
                        fontWeight: '700',
                        fontSize: '0.9375rem'
                      }}>
                        {movie.year}
                      </span>
                      <span style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.9375rem'
                      }}>
                        {movie.rating}
                      </span>
                    </div>
                    <p style={{ marginBottom: '1.5rem' }}>
                      {movie.description.substring(0, 120)}...
                    </p>
                    <div className="card-link">
                      View Details →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Movie Detail Modal */}
      {selectedMovie && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="glass-box"
            style={{
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMovie(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(211, 47, 47, 0.9)',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
                zIndex: 10,
                fontWeight: '300'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                e.currentTarget.style.background = 'rgba(211, 47, 47, 1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.background = 'rgba(211, 47, 47, 0.9)';
              }}
            >
              ✕
            </button>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '300px 1fr',
              gap: '2rem'
            }}
            className="movie-modal-grid">
              <div style={{
                width: '100%',
                height: '450px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                position: 'relative'
              }}>
                <img
                  src={selectedMovie.poster}
                  alt={selectedMovie.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                />
              </div>
              <div>
                <h2 style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  color: selectedMovie.categoryColor,
                  fontWeight: '800',
                  textShadow: `0 0 20px ${selectedMovie.categoryColor}80`
                }}>
                  {selectedMovie.title}
                </h2>
                <div style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    padding: '0.5rem 1rem',
                    background: `${selectedMovie.categoryColor}20`,
                    borderRadius: '100px',
                    color: selectedMovie.categoryColor,
                    fontWeight: '700',
                    fontSize: '0.9375rem'
                  }}>
                    {selectedMovie.year}
                  </span>
                  <span style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '100px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '600',
                    fontSize: '0.9375rem'
                  }}>
                    {selectedMovie.rating}
                  </span>
                  {selectedMovie.boxOffice && (
                    <span style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(76, 175, 80, 0.2)',
                      borderRadius: '100px',
                      color: '#4CAF50',
                      fontWeight: '700',
                      fontSize: '0.9375rem'
                    }}>
                      💰 {selectedMovie.boxOffice}
                    </span>
                  )}
                </div>
                <p style={{
                  fontSize: '1.125rem',
                  fontStyle: 'italic',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '1.5rem',
                  paddingLeft: '1rem',
                  borderLeft: `3px solid ${selectedMovie.categoryColor}`
                }}>
                  "{selectedMovie.tagline}"
                </p>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '2rem'
                }}>
                  {selectedMovie.description}
                </p>
                <div style={{
                  display: 'grid',
                  gap: '1rem'
                }}>
                  <div>
                    <strong style={{ color: selectedMovie.categoryColor }}>Director:</strong>
                    <span style={{ marginLeft: '0.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                      {selectedMovie.director}
                    </span>
                  </div>
                  <div>
                    <strong style={{ color: selectedMovie.categoryColor }}>Cast:</strong>
                    <span style={{ marginLeft: '0.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                      {selectedMovie.cast}
                    </span>
                  </div>
                  {selectedMovie.awards && (
                    <div style={{
                      marginTop: '1rem',
                      padding: '1rem',
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.1))',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 215, 0, 0.3)'
                    }}>
                      <strong style={{ color: '#FFD700' }}>{selectedMovie.awards}</strong>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="glass-box" style={{
        marginTop: '5rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.1), rgba(30, 136, 229, 0.1))'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          color: 'white',
          fontWeight: '800'
        }}>
          🎯 Spider-Man Cinema Stats
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎬</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#D32F2F', marginBottom: '0.5rem' }}>
              {allMovies.filter(m => !m.upcoming).length}
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Movies Released</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💰</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#4CAF50', marginBottom: '0.5rem' }}>
              $8.9B+
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Total Box Office</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🏆</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FFD700', marginBottom: '0.5rem' }}>
              1
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Academy Award</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🕷️</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1E88E5', marginBottom: '0.5rem' }}>
              3
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Spider-Men</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
