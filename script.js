const globalOffset = 0.0;
const timeStretch = 1.0051;

const svgSpotifyPlayer = `<svg viewBox="0 0 1000 1000" style="font-family: 'Montserrat', sans-serif;">
            <defs>
                <clipPath id="circleClip">
                    <circle cx="0" cy="0" r="100"/>
                </clipPath>
            </defs>
            <g opacity="0">
                <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" dur="11.5s" fill="freeze"/>
                
                <g transform="translate(500, 500) scale(1.7)">
                    
                    <g transform="translate(0, -80)">
                        <g>
                            <animateTransform attributeName="transform" type="rotate" values="0; 360" dur="8s" repeatCount="indefinite"/>
                            <circle cx="0" cy="10" r="150" fill="rgba(0,0,0,0.5)" filter="blur(10px)"/>
                            <circle cx="0" cy="0" r="150" fill="#111"/>
                            <circle cx="0" cy="0" r="140" fill="none" stroke="#222" stroke-width="2"/>
                            <circle cx="0" cy="0" r="130" fill="none" stroke="#222" stroke-width="2"/>
                            <circle cx="0" cy="0" r="120" fill="none" stroke="#222" stroke-width="2"/>
                            
                            <image href="assets/image.avif" x="-100" y="-100" width="200" height="200" clip-path="url(#circleClip)" />
                            
                            <circle cx="0" cy="0" r="15" fill="#030303"/>
                        </g>
                    </g>

                    <g transform="translate(0, 110)" text-anchor="middle">
                        <text x="0" y="0" fill="#fff" font-size="28" font-weight="900" letter-spacing="3">we never dated</text>
                        <text x="0" y="25" fill="#888" font-size="16" font-weight="400" letter-spacing="1">sombr • I Barely Know Her</text>
                    </g>

                    <g transform="translate(0, 180)">
                        <rect x="-200" y="0" width="400" height="3" fill="#333" rx="1.5"/>
                        <rect x="-200" y="0" width="0" height="3" fill="#e63946" rx="1.5">
                            <animate attributeName="width" values="0; 400" dur="11.5s" fill="freeze"/>
                        </rect>
                        <circle cx="-200" cy="1.5" r="5" fill="#e63946">
                            <animate attributeName="cx" values="-200; 200" dur="11.5s" fill="freeze"/>
                        </circle>
                    </g>
                </g>
            </g>
        </svg>`;

const svgWaitingPortal = `<svg viewBox="0 0 1000 1000">
            <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#ff3366" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="#030303" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <g opacity="0">
                <animate attributeName="opacity" values="0; 1" dur="2s" fill="freeze"/>
                <circle cx="500" cy="500" r="400" fill="url(#glow)">
                    <animate attributeName="r" values="200; 500; 200" dur="8s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3; 0.8; 0.3" dur="4s" repeatCount="indefinite"/>
                </circle>
                <g transform="translate(500,500)">
                    <g>
                        <animateTransform attributeName="transform" type="rotate" values="0; 360" dur="25s" repeatCount="indefinite"/>
                        <circle cx="0" cy="0" r="200" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="2 15" opacity="0.7"/>
                        <circle cx="0" cy="0" r="230" fill="none" stroke="#a8dadc" stroke-width="3" stroke-dasharray="50 150" opacity="0.5"/>
                        <circle cx="200" cy="0" r="5" fill="#fff"><animate attributeName="r" values="3;7;3" dur="2s" repeatCount="indefinite"/></circle>
                        <circle cx="-200" cy="0" r="5" fill="#fff"><animate attributeName="r" values="3;7;3" dur="2s" repeatCount="indefinite" begin="1s"/></circle>
                    </g>
                </g>
                <g transform="translate(500,500)">
                    <g>
                        <animateTransform attributeName="transform" type="rotate" values="360; 0" dur="15s" repeatCount="indefinite"/>
                        <polygon points="0,-120 104,60 -104,60" fill="none" stroke="#ff3366" stroke-width="2" opacity="0.6">
                            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite"/>
                        </polygon>
                        <polygon points="0,120 -104,-60 104,-60" fill="none" stroke="#a8dadc" stroke-width="1.5" opacity="0.6">
                            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="3s" repeatCount="indefinite"/>
                        </polygon>
                    </g>
                </g>
                <g opacity="0.2">
                    <line x1="500" y1="0" x2="500" y2="1000" stroke="#fff" stroke-width="1" stroke-dasharray="5 20"/>
                    <line x1="0" y1="500" x2="1000" y2="500" stroke="#fff" stroke-width="1" stroke-dasharray="5 20"/>
                </g>
            </g>
        </svg>`;

const svgPrettyOne = `<svg viewBox="0 0 1000 1000">
            <defs>
                <radialGradient id="prettyGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fff" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="#ff99aa" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <g opacity="0">
                <animate attributeName="opacity" values="0; 1" dur="1.5s" fill="freeze"/>
                <circle cx="500" cy="500" r="300" fill="url(#prettyGlow)">
                    <animate attributeName="r" values="200; 320; 200" dur="4s" repeatCount="indefinite"/>
                </circle>
                <g transform="translate(500,500)">
                    <g>
                        <animateTransform attributeName="transform" type="rotate" values="0; 360" dur="20s" repeatCount="indefinite"/>
                        <polygon points="0,-250 100,-80 250,0 100,80 0,250 -100,80 -250,0 -100,-80" fill="none" stroke="#fff" stroke-width="2" opacity="0.8"/>
                        <polygon points="0,-180 60,-40 180,0 60,40 0,180 -60,40 -180,0 -60,-40" fill="none" stroke="#ff99aa" stroke-width="1" opacity="0.6">
                            <animateTransform attributeName="transform" type="scale" values="1; 1.1; 1" dur="3s" repeatCount="indefinite" additive="sum"/>
                        </polygon>
                    </g>
                    <g>
                        <animateTransform attributeName="transform" type="rotate" values="360; 0" dur="25s" repeatCount="indefinite"/>
                        <circle cx="0" cy="0" r="300" fill="none" stroke="#fff" stroke-width="1" stroke-dasharray="5 25" opacity="0.4"/>
                        <circle cx="300" cy="0" r="3" fill="#fff"/>
                        <circle cx="-300" cy="0" r="3" fill="#fff"/>
                        <circle cx="0" cy="300" r="3" fill="#ff3366"/>
                        <circle cx="0" cy="-300" r="3" fill="#ff3366"/>
                    </g>
                </g>
            </g>
        </svg>`;

const svgBrokenGlass = `<svg viewBox="0 0 1000 1000"><polygon style="transform-origin: center;" points="0,0 400,300 100,600 500,500 700,900 600,400 1000,100" fill="none" stroke="#fff" stroke-width="3" opacity="0.3"><animate attributeName="opacity" values="0.1; 0.6; 0.1" dur="3s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="scale" values="0.95; 1.05; 0.95" dur="4s" repeatCount="indefinite"/></polygon></svg>`;
const svgConfine = `<svg viewBox="0 0 1000 1000"><rect x="100" y="100" width="800" height="800" fill="none" stroke="#e63946" stroke-width="15" opacity="0.6"><animate attributeName="x" values="100; 450; 100" dur="3s" repeatCount="indefinite"/><animate attributeName="y" values="100; 450; 100" dur="3s" repeatCount="indefinite"/><animate attributeName="width" values="800; 100; 800" dur="3s" repeatCount="indefinite"/><animate attributeName="height" values="800; 100; 800" dur="3s" repeatCount="indefinite"/></rect></svg>`;
const svgSpiral = `<svg viewBox="0 0 1000 1000"><g stroke="#fff" stroke-width="2" fill="none" opacity="0.3"><circle cx="500" cy="500" r="100"/><circle cx="500" cy="500" r="200"/><circle cx="500" cy="500" r="300"/><circle cx="500" cy="500" r="400"/><circle cx="500" cy="500" r="500"/><animateTransform attributeName="transform" type="scale" values="0.1; 2" dur="2s" repeatCount="indefinite"/></g></svg>`;
const svgBloodRed = `<svg viewBox="0 0 1000 1000"><rect width="1000" height="1000" fill="#a00000" opacity="0.5"><animate attributeName="opacity" values="0.2; 0.8; 0.2" dur="0.1s" repeatCount="indefinite"/></rect><rect x="300" y="400" width="50" height="200" fill="#fff"><animate attributeName="y" values="400; 100; 400" dur="0.1s" repeatCount="indefinite"/><animate attributeName="height" values="200; 800; 200" dur="0.1s" repeatCount="indefinite"/></rect><rect x="650" y="300" width="50" height="400" fill="#000"><animate attributeName="y" values="300; 0; 300" dur="0.15s" repeatCount="indefinite"/><animate attributeName="height" values="400; 1000; 400" dur="0.15s" repeatCount="indefinite"/></rect></svg>`;
const svgStars = `<svg viewBox="0 0 1000 1000"><circle cx="200" cy="300" r="6" fill="#fff"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/></circle><circle cx="800" cy="600" r="4" fill="#fff"><animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/></circle><circle cx="500" cy="800" r="8" fill="#fff"><animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/></circle></svg>`;
const svgRain = `<svg viewBox="0 0 1000 1000"><line x1="200" y1="0" x2="200" y2="1000" stroke="#fff" stroke-width="2" opacity="0.3"><animate attributeName="y1" values="-1000; 1000" dur="0.8s" repeatCount="indefinite"/><animate attributeName="y2" values="0; 2000" dur="0.8s" repeatCount="indefinite"/></line><line x1="500" y1="0" x2="500" y2="1000" stroke="#fff" stroke-width="1" opacity="0.5"><animate attributeName="y1" values="-1000; 1000" dur="0.6s" repeatCount="indefinite"/><animate attributeName="y2" values="0; 2000" dur="0.6s" repeatCount="indefinite"/></line><line x1="800" y1="0" x2="800" y2="1000" stroke="#fff" stroke-width="4" opacity="0.2"><animate attributeName="y1" values="-1000; 1000" dur="1s" repeatCount="indefinite"/><animate attributeName="y2" values="0; 2000" dur="1s" repeatCount="indefinite"/></line></svg>`;
const svgHaveFun = `<svg viewBox="0 0 1000 1000"><g opacity="0"><animate attributeName="opacity" values="0; 1" dur="0.3s" fill="freeze" /><circle cx="500" cy="500" r="100" fill="none" stroke="#00eaff" stroke-width="5"><animate attributeName="r" values="100; 800" dur="1.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="1; 0" dur="1.5s" repeatCount="indefinite" /></circle><polygon points="500,400 530,470 600,500 530,530 500,600 470,530 400,500 470,470" fill="#ff3366"><animateTransform attributeName="transform" type="rotate" values="0 500 500; 360 500 500" dur="3s" repeatCount="indefinite" /><animateTransform attributeName="transform" type="scale" values="1; 1.5; 1" dur="1s" repeatCount="indefinite" additive="sum" /></polygon><circle cx="500" cy="200" r="15" fill="#a8dadc"><animateTransform attributeName="transform" type="rotate" values="0 500 500; 360 500 500" dur="2s" repeatCount="indefinite" /></circle><circle cx="500" cy="800" r="10" fill="#e63946"><animateTransform attributeName="transform" type="rotate" values="360 500 500; 0 500 500" dur="2.5s" repeatCount="indefinite" /></circle></g></svg>`;

const svgDesign = `<svg viewBox="0 0 1000 1000">
            <g opacity="0">
                <animate attributeName="opacity" values="0; 0.8; 0.8; 0" keyTimes="0; 0.1; 0.8; 1" dur="2.25s" fill="freeze"/>
                <g transform="translate(500,500)">
                    <line x1="-500" y1="0" x2="500" y2="0" stroke="#a8dadc" stroke-width="1" opacity="0.3" />
                    <line x1="0" y1="-500" x2="0" y2="500" stroke="#a8dadc" stroke-width="1" opacity="0.3" />
                    <line x1="-500" y1="-500" x2="500" y2="500" stroke="#fff" stroke-width="0.5" opacity="0.2" />
                    <line x1="-500" y1="500" x2="500" y2="-500" stroke="#fff" stroke-width="0.5" opacity="0.2" />
                    <circle cx="0" cy="0" r="1" fill="none" stroke="#e0e0e0" stroke-width="1.5"><animate attributeName="r" values="1; 400" dur="2.25s" fill="freeze" /></circle>
                    <circle cx="0" cy="0" r="1" fill="none" stroke="#d4af37" stroke-width="2" stroke-dasharray="10 15"><animate attributeName="r" values="1; 280" dur="2.25s" fill="freeze" /><animateTransform attributeName="transform" type="rotate" values="0; 90" dur="2.25s" fill="freeze" additive="sum"/></circle>
                    <circle cx="0" cy="0" r="1" fill="none" stroke="#fff" stroke-width="1"><animate attributeName="r" values="1; 150" dur="2.25s" fill="freeze" /></circle>
                    <rect x="-100" y="-100" width="200" height="200" fill="none" stroke="#a8dadc" stroke-width="1" opacity="0"><animate attributeName="opacity" values="0; 0.5; 0" keyTimes="0; 0.5; 1" dur="2.25s" fill="freeze"/><animateTransform attributeName="transform" type="rotate" values="-45; 0" dur="2.25s" fill="freeze" /></rect>
                    <polygon points="0,-180 155,90 -155,90" fill="none" stroke="#ff3366" stroke-width="1" opacity="0"><animate attributeName="opacity" values="0; 0.4; 0" keyTimes="0; 0.5; 1" dur="2.25s" fill="freeze"/><animateTransform attributeName="transform" type="scale" values="0.5; 1.2" dur="2.25s" fill="freeze" /></polygon>
                </g>
            </g>
        </svg>`;

const svgRomanticize = `<svg viewBox="0 0 1000 1000"><g transform="translate(500,500)"><circle cx="0" cy="0" r="0" fill="none" stroke="#ff3366" stroke-width="1" opacity="0"><animate attributeName="r" values="0; 500" dur="2.5s" fill="freeze"/><animate attributeName="opacity" values="0; 0.5; 0" dur="2.5s" fill="freeze"/></circle><circle cx="0" cy="0" r="0" fill="none" stroke="#fff" stroke-width="2" opacity="0"><animate attributeName="r" values="0; 300" dur="2.5s" begin="0.2s" fill="freeze"/><animate attributeName="opacity" values="0; 0.3; 0" dur="2.5s" begin="0.2s" fill="freeze"/></circle><g stroke="#ff99aa" stroke-width="2" fill="none"><animateTransform attributeName="transform" type="rotate" values="0; 90" dur="2.5s" fill="freeze"/><path d="M0,0 Q100,-150 0,-300 Q-100,-150 0,0" opacity="0"><animate attributeName="opacity" values="0;0.8;0" dur="2.5s" fill="freeze"/><animate attributeName="stroke-dasharray" values="0,1000; 1000,0" dur="1.5s" fill="freeze"/></path><path d="M0,0 Q150,-100 300,0 Q150,100 0,0" opacity="0"><animate attributeName="opacity" values="0;0.8;0" dur="2.5s" fill="freeze"/><animate attributeName="stroke-dasharray" values="0,1000; 1000,0" dur="1.5s" fill="freeze"/></path><path d="M0,0 Q100,150 0,300 Q-100,150 0,0" opacity="0"><animate attributeName="opacity" values="0;0.8;0" dur="2.5s" fill="freeze"/><animate attributeName="stroke-dasharray" values="0,1000; 1000,0" dur="1.5s" fill="freeze"/></path><path d="M0,0 Q-150,100 -300,0 Q-150,-100 0,0" opacity="0"><animate attributeName="opacity" values="0;0.8;0" dur="2.5s" fill="freeze"/><animate attributeName="stroke-dasharray" values="0,1000; 1000,0" dur="1.5s" fill="freeze"/></path></g><g stroke="#fff" stroke-width="1" fill="none"><animateTransform attributeName="transform" type="rotate" values="45; -45" dur="2.5s" fill="freeze"/><path d="M0,0 Q100,-150 0,-300 Q-100,-150 0,0" opacity="0"><animate attributeName="opacity" values="0;0.5;0" dur="2.5s" fill="freeze"/></path><path d="M0,0 Q150,-100 300,0 Q150,100 0,0" opacity="0"><animate attributeName="opacity" values="0;0.5;0" dur="2.5s" fill="freeze"/></path><path d="M0,0 Q100,150 0,300 Q-100,150 0,0" opacity="0"><animate attributeName="opacity" values="0;0.5;0" dur="2.5s" fill="freeze"/></path><path d="M0,0 Q-150,100 -300,0 Q-150,-100 0,0" opacity="0"><animate attributeName="opacity" values="0;0.5;0" dur="2.5s" fill="freeze"/></path></g><g fill="#ff3366"><circle cx="0" cy="-50" r="4"><animateTransform attributeName="transform" type="translate" values="0,0; 0,-200" dur="2.5s" fill="freeze"/><animate attributeName="opacity" values="1;0" dur="2.5s" fill="freeze"/></circle><circle cx="50" cy="0" r="3"><animateTransform attributeName="transform" type="translate" values="0,0; 200,0" dur="2.5s" fill="freeze"/><animate attributeName="opacity" values="1;0" dur="2.5s" fill="freeze"/></circle><circle cx="0" cy="50" r="5"><animateTransform attributeName="transform" type="translate" values="0,0; 0,200" dur="2.5s" fill="freeze"/><animate attributeName="opacity" values="1;0" dur="2.5s" fill="freeze"/></circle><circle cx="-50" cy="0" r="2"><animateTransform attributeName="transform" type="translate" values="0,0; -200,0" dur="2.5s" fill="freeze"/><animate attributeName="opacity" values="1;0" dur="2.5s" fill="freeze"/></circle></g></g></svg>`;

const svgFinalCollapse = `<svg viewBox="0 0 1000 1000"><path d="M 0 500 L 200 500 L 300 100 L 400 900 L 500 500 L 1000 500" fill="none" stroke="#e63946" stroke-width="4" opacity="1"><animate attributeName="d" values="M 0 500 L 200 500 L 300 100 L 400 900 L 500 500 L 1000 500; M 0 500 L 300 500 L 400 400 L 450 600 L 500 500 L 1000 500; M 0 500 L 400 500 L 480 480 L 520 520 L 600 500 L 1000 500; M 0 500 L 1000 500 L 1000 500 L 1000 500 L 1000 500 L 1000 500" dur="4s" fill="freeze" calcMode="discrete"/><animate attributeName="opacity" values="1; 0.5; 1; 0.2; 0" dur="5s" fill="freeze"/><animate attributeName="stroke" values="#e63946; #00eaff; #e63946; #333333" dur="4s" fill="freeze"/></path><g transform="translate(500,500)"><circle cx="0" cy="0" r="0" fill="none" stroke="#fff" stroke-width="1" opacity="1"><animate attributeName="r" values="0; 800" dur="4s" fill="freeze"/><animate attributeName="opacity" values="0.8; 0" dur="4s" fill="freeze"/></circle><polygon points="0,0 20,-30 50,-10" fill="#e63946" opacity="0"><animate attributeName="opacity" values="0; 0.8; 0" dur="4s" fill="freeze"/><animateTransform attributeName="transform" type="translate" values="0,0; 150,-200" dur="5s" fill="freeze"/><animateTransform attributeName="transform" type="rotate" values="0; 120" dur="5s" additive="sum" fill="freeze"/></polygon><polygon points="0,0 -30,-40 -10,-60" fill="#a8dadc" opacity="0"><animate attributeName="opacity" values="0; 0.6; 0" dur="4s" fill="freeze"/><animateTransform attributeName="transform" type="translate" values="0,0; -200,-150" dur="5s" fill="freeze"/><animateTransform attributeName="transform" type="rotate" values="0; -90" dur="5s" additive="sum" fill="freeze"/></polygon><polygon points="0,0 -40,20 -20,50" fill="#ff3366" opacity="0"><animate attributeName="opacity" values="0; 0.7; 0" dur="4s" fill="freeze"/><animateTransform attributeName="transform" type="translate" values="0,0; -100,250" dur="5s" fill="freeze"/><animateTransform attributeName="transform" type="rotate" values="0; 180" dur="5s" additive="sum" fill="freeze"/></polygon><polygon points="0,0 30,30 60,10" fill="#fff" opacity="0"><animate attributeName="opacity" values="0; 0.5; 0" dur="4s" fill="freeze"/><animateTransform attributeName="transform" type="translate" values="0,0; 250,150" dur="5s" fill="freeze"/><animateTransform attributeName="transform" type="rotate" values="0; -180" dur="5s" additive="sum" fill="freeze"/></polygon></g></svg>`;

const svgClock = `<svg viewBox="0 0 1000 1000">
            <g transform="translate(500,500)">
                <circle cx="0" cy="0" r="300" fill="none" stroke="#fff" stroke-width="1" stroke-dasharray="10 20" opacity="0.3">
                    <animateTransform attributeName="transform" type="rotate" values="360; 0" dur="20s" repeatCount="indefinite"/>
                </circle>
                <circle cx="0" cy="0" r="280" fill="none" stroke="#e63946" stroke-width="2" opacity="0.2"/>
                <!-- Ponteiro dos minutos rápido -->
                <line x1="0" y1="0" x2="0" y2="-250" stroke="#fff" stroke-width="4">
                    <animateTransform attributeName="transform" type="rotate" values="0; 360" dur="3s" repeatCount="indefinite"/>
                </line>
                <!-- Ponteiro das horas lento -->
                <line x1="0" y1="0" x2="150" y2="0" stroke="#a8dadc" stroke-width="6" opacity="0.8">
                    <animateTransform attributeName="transform" type="rotate" values="0; 360" dur="15s" repeatCount="indefinite"/>
                </line>
                <circle cx="0" cy="0" r="10" fill="#ff3366"/>
            </g>
        </svg>`;

const wordsData = [
  {
    word: "",
    start: 0.0,
    end: 11.5,
    fontClass: "font-typewriter",
    animClass: "anim-drift",
    shakeScreen: false,
    svg: svgSpotifyPlayer,
  },

  {
    word: "YOU",
    start: 12.21,
    end: 12.5,
    fontClass: "font-base",
    animClass: "anim-skew-in",
    shakeScreen: true,
    svg: svgBrokenGlass,
  },
  {
    word: "WERE",
    start: 12.5,
    end: 12.8,
    fontClass: "font-base",
    animClass: "anim-skew-in",
    shakeScreen: false,
  },
  {
    word: "clever",
    start: 12.8,
    end: 14.1,
    fontClass: "font-glitch",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
  },

  {
    word: "knew when",
    start: 14.24,
    end: 15.0,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
    svg: svgStars,
  },
  {
    word: "TO DELIVER",
    start: 15.0,
    end: 15.8,
    fontClass: "font-base",
    animClass: "anim-drop",
    shakeScreen: true,
  },
  {
    word: "your lines",
    start: 15.8,
    end: 17.5,
    fontClass: "font-marker",
    animClass: "anim-flicker",
    shakeScreen: false,
  },

  {
    word: "and make it seem",
    start: 17.78,
    end: 18.8,
    fontClass: "font-typewriter",
    animClass: "anim-drift",
    shakeScreen: false,
    svg: svgBrokenGlass,
  },
  {
    word: "LIKE YOU",
    start: 18.8,
    end: 19.4,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: false,
  },
  {
    word: "weren't",
    start: 19.4,
    end: 20.0,
    fontClass: "font-marker",
    animClass: "anim-flicker",
    shakeScreen: true,
  },
  {
    word: "that bright",
    start: 20.0,
    end: 21.2,
    fontClass: "font-cursive",
    animClass: "anim-slide",
    shakeScreen: false,
  },

  {
    word: "YOU WERE better",
    start: 21.55,
    end: 23.4,
    fontClass: "font-serif",
    animClass: "anim-float",
    shakeScreen: false,
    svg: svgConfine,
  },
  {
    word: "in every way",
    start: 23.55,
    end: 24.8,
    fontClass: "font-typewriter",
    animClass: "anim-skew-in",
    shakeScreen: false,
  },
  {
    word: "BY DESIGN",
    start: 24.8,
    end: 27.05,
    fontClass: "font-base",
    animClass: "anim-slam-fade",
    shakeScreen: true,
    svg: svgDesign,
  },

  {
    word: "you were",
    start: 27.05,
    end: 27.8,
    fontClass: "font-cursive",
    animClass: "anim-pop",
    shakeScreen: false,
    svg: svgStars,
  },
  {
    word: "TOO GOOD",
    start: 27.8,
    end: 28.5,
    fontClass: "font-marker",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
  },
  {
    word: "for a man's",
    start: 28.5,
    end: 29.5,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
  },
  {
    word: "confine",
    start: 29.5,
    end: 30.1,
    fontClass: "font-glitch",
    animClass: "anim-slam",
    shakeScreen: true,
    svg: svgBrokenGlass,
  },

  {
    word: "HOW COME",
    start: 30.18,
    end: 31.0,
    fontClass: "font-base",
    animClass: "anim-tracking-in",
    shakeScreen: false,
    svg: svgSpiral,
  },
  {
    word: "we never",
    start: 31.0,
    end: 31.8,
    fontClass: "font-serif",
    animClass: "anim-skew-in",
    shakeScreen: false,
  },
  {
    word: "EVEN DATED",
    start: 31.8,
    end: 33.5,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },

  {
    word: "but i still find",
    start: 33.86,
    end: 35.0,
    fontClass: "font-typewriter",
    animClass: "anim-pop",
    shakeScreen: false,
    svg: svgStars,
  },
  {
    word: "MYSELF",
    start: 35.0,
    end: 36.0,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "thinking of you",
    start: 36.0,
    end: 37.5,
    fontClass: "font-cursive",
    animClass: "anim-slide",
    shakeScreen: false,
  },

  {
    word: "DAILY?",
    start: 37.5,
    end: 39.0,
    fontClass: "font-marker",
    animClass: "anim-pulse",
    shakeScreen: false,
    svg: svgClock,
  },

  {
    word: "WHY",
    start: 39.45,
    end: 40.0,
    fontClass: "font-base",
    animClass: "anim-spin-in",
    shakeScreen: false,
    svg: svgSpiral,
  },
  {
    word: "do you always",
    start: 40.0,
    end: 41.5,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
  },
  {
    word: "LEAVE ME",
    start: 41.5,
    end: 42.3,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "aching",
    start: 42.3,
    end: 43.6,
    fontClass: "font-glitch",
    animClass: "anim-shatter",
    shakeScreen: true,
  },

  {
    word: "when you were",
    start: 43.65,
    end: 45.0,
    fontClass: "font-typewriter",
    animClass: "anim-pop",
    shakeScreen: false,
    svg: svgBrokenGlass,
  },
  {
    word: "NEVER MINE",
    start: 45.0,
    end: 46.5,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "for the taking?",
    start: 46.5,
    end: 47.9,
    fontClass: "font-marker",
    animClass: "anim-drop",
    shakeScreen: false,
  },

  {
    word: "I CAN'T",
    start: 48.32,
    end: 49.0,
    fontClass: "font-base",
    animClass: "anim-neon",
    shakeScreen: true,
    svg: svgBloodRed,
  },
  {
    word: "make you love me",
    start: 49.0,
    end: 50.3,
    fontClass: "font-glitch",
    animClass: "anim-flicker",
    shakeScreen: false,
  },
  {
    word: "NO",
    start: 50.35,
    end: 51.0,
    fontClass: "font-marker",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "i can't make you love me",
    start: 51.0,
    end: 52.6,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
  },

  {
    word: "BABE",
    start: 52.72,
    end: 53.5,
    fontClass: "font-cursive",
    animClass: "anim-pop",
    shakeScreen: false,
    svg: svgConfine,
  },
  {
    word: "I CAN'T",
    start: 53.5,
    end: 54.0,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "make you love me",
    start: 54.0,
    end: 54.9,
    fontClass: "font-typewriter",
    animClass: "anim-flicker",
    shakeScreen: false,
  },
  {
    word: "NO I CAN'T",
    start: 55.0,
    end: 56.0,
    fontClass: "font-base",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
  },
  {
    word: "make you love me",
    start: 56.0,
    end: 57.4,
    fontClass: "font-marker",
    animClass: "anim-slide",
    shakeScreen: false,
  },

  {
    word: "I CAN'T",
    start: 57.51,
    end: 58.5,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
    svg: svgBloodRed,
  },
  {
    word: "make you love me",
    start: 58.5,
    end: 59.5,
    fontClass: "font-glitch",
    animClass: "anim-pop",
    shakeScreen: false,
  },
  {
    word: "NO",
    start: 59.61,
    end: 60.5,
    fontClass: "font-marker",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "i can't make you love me",
    start: 60.5,
    end: 61.8,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
  },

  {
    word: "BABE",
    start: 61.9,
    end: 62.5,
    fontClass: "font-cursive",
    animClass: "anim-pop",
    shakeScreen: false,
    svg: svgStars,
  },
  {
    word: "I CAN'T",
    start: 62.5,
    end: 63.5,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "make you love me",
    start: 63.5,
    end: 64.1,
    fontClass: "font-typewriter",
    animClass: "anim-pop",
    shakeScreen: false,
  },
  {
    word: "NO I CAN'T",
    start: 64.21,
    end: 65.5,
    fontClass: "font-base",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
  },
  {
    word: "make you love me",
    start: 65.5,
    end: 67.4,
    fontClass: "font-marker",
    animClass: "anim-flicker",
    shakeScreen: true,
  },

  {
    word: "you are a",
    start: 67.43,
    end: 68.5,
    fontClass: "font-serif",
    animClass: "anim-pop",
    shakeScreen: false,
    svg: svgPrettyOne,
  },
  {
    word: "PRETTY ONE",
    start: 68.5,
    end: 69.6,
    fontClass: "font-cursive",
    animClass: "anim-pulse",
    shakeScreen: false,
  },

  {
    word: "nice to",
    start: 69.68,
    end: 70.5,
    fontClass: "font-serif",
    animClass: "anim-pop",
    shakeScreen: false,
  },
  {
    word: "ROMANTICIZE",
    start: 70.5,
    end: 73.1,
    fontClass: "font-cursive",
    animClass: "anim-slide",
    shakeScreen: false,
    svg: svgRomanticize,
  },

  {
    word: "but you don't",
    start: 73.19,
    end: 74.5,
    fontClass: "font-typewriter",
    animClass: "anim-slide",
    shakeScreen: false,
    svg: svgBrokenGlass,
  },
  {
    word: "MAKE YOURSELF",
    start: 74.5,
    end: 75.5,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "easy to like",
    start: 75.5,
    end: 76.6,
    fontClass: "font-serif",
    animClass: "anim-zoom",
    shakeScreen: false,
  },

  {
    word: "you like to",
    start: 76.66,
    end: 77.5,
    fontClass: "font-cursive",
    animClass: "anim-pop",
    shakeScreen: false,
    svg: svgStars,
  },
  {
    word: "HAVE YOUR FUN",
    start: 77.5,
    end: 78.9,
    fontClass: "font-base",
    animClass: "anim-skew-in",
    shakeScreen: true,
    svg: svgHaveFun,
  },

  {
    word: "you dance",
    start: 78.92,
    end: 80.0,
    fontClass: "font-typewriter",
    animClass: "anim-slide",
    shakeScreen: false,
  },
  {
    word: "AROUND THE LINE",
    start: 80.0,
    end: 82.5,
    fontClass: "font-marker",
    animClass: "anim-pop",
    shakeScreen: false,
  },

  {
    word: "of what is",
    start: 82.52,
    end: 83.5,
    fontClass: "font-serif",
    animClass: "anim-drift",
    shakeScreen: false,
    svg: svgBrokenGlass,
  },
  {
    word: "WRONG",
    start: 83.5,
    end: 84.5,
    fontClass: "font-glitch",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "and what is",
    start: 84.5,
    end: 85.0,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
  },
  {
    word: "RIGHT",
    start: 85.0,
    end: 85.57,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },

  {
    word: "HOW COME",
    start: 85.57,
    end: 87.0,
    fontClass: "font-base",
    animClass: "anim-spin-in",
    shakeScreen: false,
    svg: svgSpiral,
  },
  {
    word: "we never",
    start: 87.0,
    end: 88.0,
    fontClass: "font-serif",
    animClass: "anim-skew-in",
    shakeScreen: false,
  },
  {
    word: "EVEN DATED",
    start: 88.0,
    end: 89.2,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },

  {
    word: "but i still find",
    start: 89.24,
    end: 91.0,
    fontClass: "font-typewriter",
    animClass: "anim-pop",
    shakeScreen: false,
    svg: svgStars,
  },
  {
    word: "MYSELF",
    start: 91.0,
    end: 92.0,
    fontClass: "font-base",
    animClass: "anim-drop",
    shakeScreen: true,
  },
  {
    word: "thinking of you",
    start: 92.0,
    end: 93.3,
    fontClass: "font-cursive",
    animClass: "anim-slide",
    shakeScreen: false,
  },

  {
    word: "DAILY?",
    start: 93.3,
    end: 94.7,
    fontClass: "font-marker",
    animClass: "anim-pulse",
    shakeScreen: false,
    svg: svgClock,
  },

  {
    word: "WHY",
    start: 94.71,
    end: 96.0,
    fontClass: "font-base",
    animClass: "anim-spin-in",
    shakeScreen: false,
    svg: svgSpiral,
  },
  {
    word: "do you always",
    start: 96.0,
    end: 97.5,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
  },
  {
    word: "LEAVE ME",
    start: 97.5,
    end: 98.5,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "aching",
    start: 98.5,
    end: 99.0,
    fontClass: "font-glitch",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
  },

  {
    word: "when you were",
    start: 99.07,
    end: 101.0,
    fontClass: "font-typewriter",
    animClass: "anim-drift",
    shakeScreen: false,
    svg: svgBrokenGlass,
  },
  {
    word: "NEVER MINE",
    start: 101.0,
    end: 102.5,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "for the taking?",
    start: 102.5,
    end: 103.4,
    fontClass: "font-marker",
    animClass: "anim-drop",
    shakeScreen: false,
  },

  {
    word: "I CAN'T",
    start: 103.69,
    end: 104.5,
    fontClass: "font-base",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
    svg: svgBloodRed,
  },
  {
    word: "make you love me",
    start: 104.5,
    end: 105.8,
    fontClass: "font-glitch",
    animClass: "anim-flicker",
    shakeScreen: false,
  },
  {
    word: "NO",
    start: 105.81,
    end: 106.5,
    fontClass: "font-marker",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "i can't make you love me",
    start: 106.5,
    end: 108.1,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
  },

  {
    word: "BABE",
    start: 108.19,
    end: 109.0,
    fontClass: "font-cursive",
    animClass: "anim-pop",
    shakeScreen: false,
    svg: svgConfine,
  },
  {
    word: "I CAN'T",
    start: 109.0,
    end: 109.8,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "make you love me",
    start: 109.8,
    end: 110.3,
    fontClass: "font-typewriter",
    animClass: "anim-flicker",
    shakeScreen: false,
  },
  {
    word: "NO I CAN'T",
    start: 110.33,
    end: 111.5,
    fontClass: "font-base",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
  },
  {
    word: "make you love me",
    start: 111.5,
    end: 112.9,
    fontClass: "font-marker",
    animClass: "anim-slide",
    shakeScreen: false,
  },

  {
    word: "I CAN'T",
    start: 112.92,
    end: 113.8,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
    svg: svgBloodRed,
  },
  {
    word: "make you love me",
    start: 113.8,
    end: 115.0,
    fontClass: "font-glitch",
    animClass: "anim-pop",
    shakeScreen: false,
  },
  {
    word: "NO",
    start: 115.03,
    end: 116.0,
    fontClass: "font-marker",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "i can't make you love me",
    start: 116.0,
    end: 117.4,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
  },

  {
    word: "BABE",
    start: 117.41,
    end: 118.5,
    fontClass: "font-cursive",
    animClass: "anim-pop",
    shakeScreen: false,
    svg: svgStars,
  },
  {
    word: "I CAN'T",
    start: 118.5,
    end: 119.2,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "make you love me",
    start: 119.2,
    end: 119.5,
    fontClass: "font-typewriter",
    animClass: "anim-pop",
    shakeScreen: false,
  },
  {
    word: "NO I CAN'T",
    start: 119.58,
    end: 121.0,
    fontClass: "font-base",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
  },
  {
    word: "make you love me",
    start: 121.0,
    end: 121.2,
    fontClass: "font-marker",
    animClass: "anim-flicker",
    shakeScreen: true,
  },

  {
    word: "I wish",
    start: 121.24,
    end: 122.5,
    fontClass: "font-serif",
    animClass: "anim-float",
    shakeScreen: false,
    svg: svgRain,
  },
  {
    word: "NOTHING",
    start: 122.5,
    end: 123.5,
    fontClass: "font-base",
    animClass: "anim-tracking-in",
    shakeScreen: false,
  },
  {
    word: "but the best",
    start: 123.5,
    end: 125.0,
    fontClass: "font-typewriter",
    animClass: "anim-float",
    shakeScreen: false,
  },
  {
    word: "for you",
    start: 125.0,
    end: 126.4,
    fontClass: "font-cursive",
    animClass: "anim-drift",
    shakeScreen: false,
  },

  {
    word: "but i hope",
    start: 126.5,
    end: 128.5,
    fontClass: "font-serif",
    animClass: "anim-float",
    shakeScreen: false,
  },
  {
    word: "WHO'S NEXT",
    start: 128.5,
    end: 130.0,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "sees the rest",
    start: 130.0,
    end: 131.4,
    fontClass: "font-marker",
    animClass: "anim-drop",
    shakeScreen: false,
  },

  {
    word: "of you",
    start: 131.5,
    end: 134.4,
    fontClass: "font-cursive",
    animClass: "anim-drift",
    shakeScreen: false,
    svg: svgSpotifyPlayer,
  },
  {
    word: "",
    start: 134.5,
    end: 140.0,
    fontClass: "font-base",
    animClass: "anim-pop",
    shakeScreen: false,
  },

  {
    word: "HOW COME",
    start: 140.97,
    end: 142.5,
    fontClass: "font-base",
    animClass: "anim-tracking-in",
    shakeScreen: true,
    svg: svgBloodRed,
  },
  {
    word: "we never",
    start: 142.5,
    end: 143.5,
    fontClass: "font-serif",
    animClass: "anim-skew-in",
    shakeScreen: false,
  },
  {
    word: "EVEN DATED",
    start: 143.5,
    end: 144.7,
    fontClass: "font-glitch",
    animClass: "anim-slam",
    shakeScreen: true,
  },

  {
    word: "but i still find",
    start: 144.71,
    end: 146.5,
    fontClass: "font-typewriter",
    animClass: "anim-drift",
    shakeScreen: false,
    svg: svgStars,
  },
  {
    word: "MYSELF",
    start: 146.5,
    end: 147.5,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "thinking of you",
    start: 147.5,
    end: 149.0,
    fontClass: "font-cursive",
    animClass: "anim-pulse",
    shakeScreen: false,
  },

  {
    word: "DAILY?",
    start: 149.0,
    end: 150.1,
    fontClass: "font-marker",
    animClass: "anim-drop",
    shakeScreen: true,
    svg: svgClock,
  },

  {
    word: "WHY",
    start: 150.13,
    end: 151.5,
    fontClass: "font-base",
    animClass: "anim-spin-in",
    shakeScreen: true,
    svg: svgSpiral,
  },
  {
    word: "do you always",
    start: 151.5,
    end: 152.5,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
  },
  {
    word: "LEAVE ME",
    start: 152.5,
    end: 153.5,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "aching",
    start: 153.5,
    end: 154.3,
    fontClass: "font-glitch",
    animClass: "anim-shatter",
    shakeScreen: true,
  },

  {
    word: "when you were",
    start: 154.38,
    end: 156.0,
    fontClass: "font-typewriter",
    animClass: "anim-skew-in",
    shakeScreen: false,
    svg: svgBrokenGlass,
  },
  {
    word: "NEVER MINE",
    start: 156.0,
    end: 158.0,
    fontClass: "font-base",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
  },
  {
    word: "for the taking?",
    start: 158.0,
    end: 159.1,
    fontClass: "font-marker",
    animClass: "anim-drop",
    shakeScreen: false,
  },

  {
    word: "HOW COME",
    start: 159.39,
    end: 161.0,
    fontClass: "font-base",
    animClass: "anim-tracking-in",
    shakeScreen: true,
    svg: svgBloodRed,
  },
  {
    word: "we never",
    start: 161.0,
    end: 162.0,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
  },
  {
    word: "EVEN DATED",
    start: 162.0,
    end: 163.1,
    fontClass: "font-glitch",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
  },

  {
    word: "but i still find",
    start: 163.18,
    end: 165.0,
    fontClass: "font-typewriter",
    animClass: "anim-pop",
    shakeScreen: false,
    svg: svgStars,
  },
  {
    word: "MYSELF",
    start: 165.0,
    end: 166.5,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "thinking of you",
    start: 166.5,
    end: 167.5,
    fontClass: "font-cursive",
    animClass: "anim-slide",
    shakeScreen: false,
  },

  {
    word: "DAILY?",
    start: 167.5,
    end: 168.6,
    fontClass: "font-marker",
    animClass: "anim-pulse",
    shakeScreen: true,
    svg: svgClock,
  },

  {
    word: "WHY",
    start: 168.64,
    end: 170.0,
    fontClass: "font-base",
    animClass: "anim-spin-in",
    shakeScreen: true,
    svg: svgSpiral,
  },
  {
    word: "do you always",
    start: 170.0,
    end: 171.0,
    fontClass: "font-serif",
    animClass: "anim-slide",
    shakeScreen: false,
  },
  {
    word: "LEAVE ME",
    start: 171.0,
    end: 172.0,
    fontClass: "font-base",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "aching",
    start: 172.0,
    end: 172.9,
    fontClass: "font-glitch",
    animClass: "anim-flicker",
    shakeScreen: true,
  },

  {
    word: "when you were",
    start: 172.94,
    end: 175.0,
    fontClass: "font-typewriter",
    animClass: "anim-drift",
    shakeScreen: false,
    svg: svgBrokenGlass,
  },
  {
    word: "NEVER MINE",
    start: 175.0,
    end: 176.5,
    fontClass: "font-base",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
  },
  {
    word: "for the taking?",
    start: 176.5,
    end: 177.3,
    fontClass: "font-marker",
    animClass: "anim-drop",
    shakeScreen: false,
  },

  {
    word: "I CAN'T",
    start: 177.63,
    end: 178.5,
    fontClass: "font-base",
    animClass: "anim-neon",
    shakeScreen: true,
    svg: svgConfine,
  },
  {
    word: "make you love me",
    start: 178.5,
    end: 179.5,
    fontClass: "font-serif",
    animClass: "anim-drift",
    shakeScreen: false,
  },
  {
    word: "NO",
    start: 179.58,
    end: 180.5,
    fontClass: "font-marker",
    animClass: "anim-slam",
    shakeScreen: true,
  },
  {
    word: "i can't make you love me",
    start: 180.5,
    end: 181.9,
    fontClass: "font-typewriter",
    animClass: "anim-flicker",
    shakeScreen: false,
  },

  {
    word: "BABE",
    start: 181.96,
    end: 183.0,
    fontClass: "font-cursive",
    animClass: "anim-drift",
    shakeScreen: false,
  },
  {
    word: "I CAN'T",
    start: 183.0,
    end: 184.0,
    fontClass: "font-base",
    animClass: "anim-drop",
    shakeScreen: true,
  },
  {
    word: "make you love me",
    start: 184.0,
    end: 184.1,
    fontClass: "font-typewriter",
    animClass: "anim-pop",
    shakeScreen: false,
  },
  {
    word: "NO I CAN'T",
    start: 184.18,
    end: 185.5,
    fontClass: "font-base",
    animClass: "anim-glitch-heavy",
    shakeScreen: true,
  },

  {
    word: "make you love me...",
    start: 185.5,
    end: 200.0,
    fontClass: "font-glitch",
    animClass: "anim-zoom",
    shakeScreen: false,
    svg: svgFinalCollapse,
    blackout: true,
  },
];

const audio = document.getElementById("my-audio");
const container = document.getElementById("word-container");
const svgContainer = document.getElementById("svg-container");
const startBtn = document.getElementById("start-button");
const overlay = document.getElementById("start-overlay");
const blackoutOverlay = document.getElementById("blackout-overlay");

let activeWordIndex = -1;
let isPlaying = false;

function updateAnimation() {
  if (!isPlaying) return;

  const time = audio.currentTime * timeStretch + globalOffset;
  let newIndex = -1;

  for (let i = 0; i < wordsData.length; i++) {
    if (time >= wordsData[i].start && time <= wordsData[i].end) {
      newIndex = i;
      break;
    }
  }

  if (newIndex !== activeWordIndex) {
    activeWordIndex = newIndex;

    if (activeWordIndex !== -1) {
      const data = wordsData[activeWordIndex];

      if (data.svg !== undefined) {
        svgContainer.innerHTML = data.svg;
      }

      if (data.blackout) {
        blackoutOverlay.style.opacity = "1";
      } else {
        blackoutOverlay.style.opacity = "0";
      }

      container.innerHTML = `<span class="${data.fontClass} ${data.animClass}" style="display:inline-block;">${data.word}</span>`;

      if (data.shakeScreen) {
        document.body.classList.remove("screen-shake");
        void document.body.offsetWidth;
        document.body.classList.add("screen-shake");
      }
    } else {
      container.innerHTML = "";
      document.body.classList.remove("screen-shake");
      blackoutOverlay.style.opacity = "0";
    }
  }
  requestAnimationFrame(updateAnimation);
}

startBtn.addEventListener("click", () => {
  overlay.style.opacity = "0";
  setTimeout(() => (overlay.style.display = "none"), 500);
  audio.play();
  isPlaying = true;
  requestAnimationFrame(updateAnimation);
});

audio.addEventListener("pause", () => (isPlaying = false));
audio.addEventListener("ended", () => (isPlaying = false));
