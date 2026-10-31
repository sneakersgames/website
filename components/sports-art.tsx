import "./sports-art.css";

/** Expressive, fictional game artwork — these are not product screenshots. */
export function HeroArtwork() {
  return (
    <svg className="art-hero" viewBox="0 0 600 565" fill="none" aria-hidden="true">
      <defs>
        <clipPath id="art-player-clip"><rect x="191" y="75" width="250" height="360" rx="22" /></clipPath>
        <pattern id="art-pitch-dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#c7b8e3" /></pattern>
      </defs>
      <circle cx="312" cy="282" r="229" fill="#eae2f5" />
      <circle cx="312" cy="282" r="229" fill="url(#art-pitch-dots)" opacity=".48" />
      <g stroke="#cabcdf" strokeWidth="1.5" opacity=".8" transform="rotate(-15 312 282)">
        <rect x="129" y="126" width="366" height="311" rx="18" />
        <path d="M129 282H495M245 126V167H379V126M245 437V396H379V437" />
        <circle cx="312" cy="282" r="62" /><circle cx="312" cy="282" r="4" fill="#cabcdf" />
      </g>
      <path d="M66 202L82 221L108 217L99 242L114 264L87 267L73 289L61 265L35 259L53 240L50 214Z" fill="#7137cf" />
      <path d="M524 307L532 320L548 321L539 334L543 350L528 345L514 354L514 337L502 327L518 321Z" fill="#6c32cf" />
      <g className="art-hero-ball" transform="translate(485 79) rotate(14)">
        <circle r="47" fill="#f8f6ed" stroke="#262221" strokeWidth="2.5" />
        <path d="M-13-18L12-19L24 4L9 23L-16 17L-25-4Z" fill="#262221" />
        <path d="M-13-18L-20-42M12-19L27-39M24 4L46 7M9 23L13 45M-16 17L-33 33M-25-4L-45-12" stroke="#262221" strokeWidth="2.5" />
        <path d="M-20-42L-31-34L-37-25L-45-12M27-39L37-28L43-14L46 7M13 45L-4 47L-22 41L-33 33" stroke="#262221" strokeWidth="7" />
      </g>
      <g className="art-player" transform="rotate(8 316 255)">
        <rect x="196" y="86" width="250" height="360" rx="23" fill="#513494" opacity=".14" />
        <rect x="191" y="75" width="250" height="360" rx="22" fill="#783cdb" />
        <g clipPath="url(#art-player-clip)">
          <path d="M183 284L448 105M191 355L448 176M191 425L448 246" stroke="#8950e1" strokeWidth="38" />
          <circle cx="315" cy="247" r="106" fill="#a17ae6" />
          <path d="M230 354L240 292Q244 277 272 267L294 258H337L362 267Q389 278 393 295L401 354Z" fill="#d9f279" />
          <path d="M280 264L294 257H337L352 266L337 293H295Z" fill="#b8d45e" />
          <path d="M299 236V264Q315 282 332 264V236" fill="#c67b4b" />
          <ellipse cx="315" cy="210" rx="37" ry="49" fill="#dda06c" />
          <ellipse cx="277" cy="211" rx="7" ry="10" fill="#dda06c" /><ellipse cx="352" cy="211" rx="7" ry="10" fill="#dda06c" />
          <path d="M278 207C272 183 277 166 291 160C299 144 326 143 340 156C359 163 362 187 351 208L344 184Q327 189 310 173Q299 185 281 185L281 207Z" fill="#302329" />
          <path d="M298 207H302M329 207H333" stroke="#302329" strokeWidth="4" strokeLinecap="round" />
          <path d="M316 208L312 223H319M303 234Q315 244 327 233" stroke="#9c573a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M250 283L240 322M382 284L390 323M271 292V354M362 292V354" stroke="#bdd761" strokeWidth="5" />
          <path d="M272 274L282 295M358 275L349 295" stroke="#f8f6ed" strokeWidth="7" />
          <text x="316" y="340" fill="#41266f" fontSize="48" fontWeight="850" textAnchor="middle">10</text>
          <rect x="191" y="353" width="250" height="82" fill="#50269d" />
          <path d="M210 403H423" stroke="#9668d5" />
        </g>
        <text x="211" y="105" fill="#f4eefa" fontSize="10" fontWeight="700" letterSpacing="2">PLAYER PICK</text>
        <path d="M411 93L413 98L419 99L415 103L416 109L411 106L406 109L407 103L403 99L409 98Z" fill="#d9f279" />
        <text x="211" y="382" fill="#fff9ed" fontSize="22" fontWeight="800">Riley No. 10</text>
        <text x="211" y="421" fill="#d6c3ed" fontSize="9" fontWeight="600" letterSpacing="1.2">YOUR FANTASY MVP</text>
        <text x="423" y="421" fill="#d9f279" fontSize="12" fontWeight="800" textAnchor="end">128 PTS</text>
      </g>
      <g className="art-score" transform="rotate(-9 135 137)">
        <rect x="44" y="76" width="178" height="121" rx="17" fill="#51412d" opacity=".08" transform="translate(0 7)" />
        <rect x="44" y="76" width="178" height="121" rx="17" fill="#d9f279" />
        <circle cx="64" cy="97" r="3.5" fill="#466025" />
        <text x="75" y="101" fill="#354827" fontSize="9" fontWeight="800" letterSpacing="1.4">MATCHDAY MAGIC</text>
        <text x="73" y="150" fill="#293022" fontSize="42" fontWeight="800">3</text>
        <text x="128" y="143" fill="#657344" fontSize="20" fontWeight="500">:</text>
        <text x="168" y="150" fill="#293022" fontSize="42" fontWeight="800">2</text>
        <text x="89" y="174" fill="#455334" fontSize="9" fontWeight="650" textAnchor="middle">DAYDREAM</text>
        <text x="178" y="174" fill="#455334" fontSize="9" fontWeight="650" textAnchor="middle">SUNDAY UTD</text>
      </g>
      <g transform="rotate(-14 129 399)">
        <circle cx="129" cy="399" r="59" fill="#f8f6ed" stroke="#6c32cf" strokeWidth="1.6" />
        <circle cx="129" cy="399" r="52" stroke="#6c32cf" strokeWidth="1" strokeDasharray="2 5" />
        <text x="129" y="381" fill="#6c32cf" fontSize="10" fontWeight="750" letterSpacing="1.4" textAnchor="middle">LESS SIDELINE.</text>
        <text x="129" y="404" fill="#6c32cf" fontSize="18" fontWeight="850" textAnchor="middle">MORE</text>
        <text x="129" y="425" fill="#6c32cf" fontSize="18" fontWeight="850" textAnchor="middle">PLAY.</text>
      </g>
      <g className="art-league" transform="rotate(-6 435 426)">
        <rect x="325" y="352" width="224" height="154" rx="17" fill="#4c3869" opacity=".1" transform="translate(0 8)" />
        <rect x="325" y="352" width="224" height="154" rx="17" fill="#fffdf6" />
        <text x="343" y="380" fill="#302735" fontSize="13" fontWeight="800">The friendly rivalry</text>
        <path d="M520 368L522 373L528 373L524 377L525 383L520 380L515 383L516 377L512 373L518 373Z" fill="#6c32cf" />
        <text x="344" y="401" fill="#8a7e8d" fontSize="8" fontWeight="700" letterSpacing="1.3">YOUR LEAGUE</text>
        <text x="529" y="401" fill="#8a7e8d" fontSize="8" fontWeight="700" textAnchor="end">PTS</text>
        <rect x="337" y="410" width="200" height="25" rx="6" fill="#eee5fa" />
        <text x="345" y="427" fill="#6c32cf" fontSize="10" fontWeight="800">01</text><text x="369" y="427" fill="#6c32cf" fontSize="10" fontWeight="800">FC Daydream</text><text x="527" y="427" fill="#6c32cf" fontSize="10" fontWeight="800" textAnchor="end">128</text>
        <text x="345" y="453" fill="#938898" fontSize="10">02</text><text x="369" y="453" fill="#54495b" fontSize="10" fontWeight="600">Sunday United</text><text x="527" y="453" fill="#54495b" fontSize="10" fontWeight="700" textAnchor="end">116</text>
        <text x="345" y="480" fill="#938898" fontSize="10">03</text><text x="369" y="480" fill="#54495b" fontSize="10" fontWeight="600">The Underdogs</text><text x="527" y="480" fill="#54495b" fontSize="10" fontWeight="700" textAnchor="end">104</text>
      </g>
      <path d="M234 499Q264 528 307 516M300 508L309 516L300 524" stroke="#6c32cf" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Jersey({ x, y, number, captain = false }: { x: number; y: number; number: string; captain?: boolean }) {
  return <g transform={`translate(${x} ${y})`}>
    <path d="M-10-13L-19-9L-25 2L-17 7L-12 1V20H12V1L17 7L25 2L19-9L10-13L4-10H-4Z" fill={captain ? "#d9f279" : "#f5f0ff"} stroke="#26493d" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M-4-10Q0-5 4-10" stroke="#6c32cf" strokeWidth="2" />
    <text x="0" y="11" fill="#552c92" fontSize="12" fontWeight="850" textAnchor="middle">{number}</text>
    {captain && <><circle cx="22" cy="-10" r="8" fill="#59359c" /><text x="22" y="-7" fill="#fff" fontSize="8" fontWeight="800" textAnchor="middle">C</text></>}
  </g>;
}

export function ArenaArtwork() {
  return (
    <svg className="art-arena" viewBox="0 0 570 435" fill="none" aria-hidden="true">
      <circle cx="292" cy="215" r="192" fill="#7949bc" opacity=".4" />
      <circle cx="292" cy="215" r="152" stroke="#a77bd3" opacity=".25" />
      <path d="M33 120L43 136L62 139L48 152L49 172L32 163L14 171L18 151L5 137L25 135Z" fill="#d9f279" />
      <g transform="rotate(-5 265 199)">
        <rect x="48" y="38" width="419" height="328" rx="17" fill="#261440" opacity=".23" transform="translate(2 10)" />
        <rect x="48" y="38" width="419" height="328" rx="17" fill="#faf8f1" />
        <path d="M49 90H466" stroke="#e6e1da" />
        <g transform="translate(70 56)"><path d="M0 0H17V5H6V10H14V15H6V23H0Z" fill="#6c32cf" /><path d="M22 23L30 0H37L45 23H38L37 19H29L28 23ZM30 14H35L33 6Z" fill="#6c32cf" /></g>
        <text x="127" y="72" fill="#342647" fontSize="17" fontWeight="850">Fan Arena</text>
        <text x="313" y="69" fill="#776b82" fontSize="8" fontWeight="700" letterSpacing="1">YOUR GAME.</text>
        <circle cx="435" cy="65" r="12" fill="#e7dbf6" /><text x="435" y="69" fill="#6539a0" fontSize="9" fontWeight="800" textAnchor="middle">SG</text>
        <text x="70" y="116" fill="#352a40" fontSize="15" fontWeight="800">Your dream team. Your call.</text>
        <rect x="70" y="131" width="229" height="207" rx="10" fill="#537b57" />
        <path d="M70 164H299M70 197H299M70 230H299M70 263H299M70 296H299" stroke="#5b845f" strokeWidth="32" />
        <g stroke="#b8d0a8" strokeWidth="1" opacity=".65"><rect x="84" y="143" width="201" height="182" rx="1" /><path d="M84 234H285M146 143V166H223V143M146 325V302H223V325" /><circle cx="185" cy="234" r="27" /><circle cx="185" cy="234" r="2" fill="#b8d0a8" /></g>
        <Jersey x={185} y={181} number="10" captain />
        <Jersey x={129} y={236} number="7" /><Jersey x={242} y={236} number="9" />
        <Jersey x={151} y={295} number="4" /><Jersey x={219} y={295} number="1" />
        <text x="320" y="149" fill="#8b7c96" fontSize="8" fontWeight="700" letterSpacing="1.2">MATCHDAY 08</text>
        <text x="320" y="185" fill="#58318c" fontSize="29" fontWeight="850">128</text>
        <text x="382" y="184" fill="#8b7c96" fontSize="10" fontWeight="600">pts</text>
        <path d="M320 200H443" stroke="#e4dce9" />
        <text x="320" y="219" fill="#8b7c96" fontSize="9" fontWeight="600">League position</text>
        <text x="320" y="244" fill="#58318c" fontSize="20" fontWeight="850">01</text>
        <path d="M428 240V227M422 232L428 226L434 232" stroke="#608244" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="318" y="267" width="125" height="52" rx="9" fill="#ebe3f5" />
        <text x="329" y="285" fill="#775397" fontSize="8" fontWeight="700">CAPTAIN&apos;S PICK</text>
        <text x="329" y="304" fill="#58318c" fontSize="11" fontWeight="800">Riley No. 10</text>
      </g>
      <g transform="rotate(7 429 338)">
        <rect x="310" y="272" width="226" height="143" rx="16" fill="#211236" opacity=".18" transform="translate(0 7)" />
        <rect x="310" y="272" width="226" height="143" rx="16" fill="#e9dcf9" />
        <text x="328" y="297" fill="#684298" fontSize="9" fontWeight="800" letterSpacing="1.1">GO ON. CALL THE SCORE.</text>
        <circle cx="344" cy="334" r="14" fill="#6c32cf" /><path d="M338 327H349V331H342V334H348V338H342V343H338Z" fill="#fff7ee" />
        <text x="400" y="345" fill="#4b287b" fontSize="30" fontWeight="850" textAnchor="middle">2</text>
        <text x="423" y="341" fill="#9175ad" fontSize="21" textAnchor="middle">:</text>
        <text x="446" y="345" fill="#4b287b" fontSize="30" fontWeight="850" textAnchor="middle">1</text>
        <circle cx="502" cy="334" r="14" fill="#adc86f" /><path d="M495 327H509L507 340L502 344L497 340Z" fill="#f9f7ea" />
        <rect x="328" y="368" width="190" height="29" rx="14.5" fill="#6c32cf" />
        <text x="423" y="387" fill="#fffaf1" fontSize="10" fontWeight="750" textAnchor="middle">Big match. Bigger bragging rights.</text>
      </g>
      <path d="M489 73Q528 95 522 131M513 126L522 133L529 125" stroke="#d9f279" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M85 381L90 392L102 394L93 402L95 414L85 408L74 414L76 402L67 394L80 392Z" fill="#d9f279" />
    </svg>
  );
}

export function SportIcon({ kind }: { kind: "play" | "strategy" | "heart" }) {
  return <svg className="art-sport-icon" viewBox="0 0 56 56" fill="none" aria-hidden="true">
    {kind === "play" && <><path d="M18 15C18 12.7 20.4 11.3 22.4 12.4L43.4 25.4C45.2 26.5 45.2 29.2 43.4 30.3L22.4 43.3C20.4 44.5 18 43.1 18 40.8Z" fill="currentColor" /><path d="M7 22H11M5 29H11M7 36H11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></>}
    {kind === "strategy" && <><path d="M12 40C13 21 35 38 37 15M30 18L38 11L44 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="44" r="5" stroke="currentColor" strokeWidth="3" /><path d="M12 10L21 19M21 10L12 19M37 36L46 45M46 36L37 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></>}
    {kind === "heart" && <><path d="M28 44C25 42 8 31 8 20C8 8 23 5 28 16C33 5 48 8 48 20C48 31 31 42 28 44Z" fill="currentColor" /><path d="M6 30H19L24 23L29 34L34 27H50" stroke="#f8f6ed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></>}
  </svg>;
}

export function Sparkle({ className }: { className?: string }) {
  return <svg className={className || "art-sparkle"} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="M50 0L60 32L85 15L68 40L100 50L68 60L85 85L60 68L50 100L40 68L15 85L32 60L0 50L32 40L15 15L40 32Z" /></svg>;
}

export function StudioArtwork() {
  return <svg className="art-studio" viewBox="0 0 360 280" fill="none" aria-hidden="true">
    <circle cx="183" cy="143" r="113" fill="#eae0f7" />
    <circle cx="183" cy="143" r="91" stroke="#c7afe7" strokeDasharray="4 7" />
    <g transform="rotate(-15 173 161)">
      <path d="M69 172L91 100L124 93L150 129L179 147L266 169Q287 174 290 195L281 210H75Q58 201 69 172Z" fill="#f8f6ed" stroke="#6c32cf" strokeWidth="3" strokeLinejoin="round" />
      <path d="M73 181Q101 179 117 151L133 117L151 131L140 166Q132 184 113 190H285M66 192L290 195M75 210H280" stroke="#6c32cf" strokeWidth="3" strokeLinejoin="round" />
      <path d="M153 139L166 127M170 150L183 138M189 157L200 146M210 164L220 153" stroke="#6c32cf" strokeWidth="4" strokeLinecap="round" />
      <path d="M95 102L114 130L127 105L124 93Z" fill="#d9f279" stroke="#6c32cf" strokeWidth="3" />
      <path d="M169 172L180 183L201 172" stroke="#6c32cf" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <g transform="translate(278 61)"><circle r="31" fill="#d9f279" stroke="#6c32cf" strokeWidth="2" /><path d="M-7-12L9-10L15 4L3 14L-12 8L-15-6Z" fill="#6c32cf" /><path d="M-7-12L-9-29M9-10L20-23M15 4L30 6M3 14L3 30M-12 8L-25 18M-15-6L-28-12" stroke="#6c32cf" strokeWidth="2" /></g>
    <path d="M47 65L53 81L70 84L57 95L58 113L43 103L26 109L31 92L20 78L38 77Z" fill="#6c32cf" />
    <path d="M278 233H318M292 219L307 246M292 246L307 219" stroke="#6c32cf" strokeWidth="2.5" strokeLinecap="round" />
  </svg>;
}
