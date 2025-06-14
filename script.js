[
  {
    id: 'game_profiles',
    elements: [
      {
        href: 'https://jp.finalfantasyxiv.com/lodestone/character/23797894/',
        icon: 'https://lds-img.finalfantasyxiv.com/h/0/U2uGfVX4GdZgU1jASO0m9h_xLg.png',
        avatar: 'https://img2.finalfantasyxiv.com/f/78e6e9d97bf6e166baaef8140fba8db4_9df1b3cb0da35db33c17ef11ddf12adafc0_96x96.jpg?1714907854',
        title: 'FINAL FANTASY XIV, The Lodestone',
        description: 'Vee Dee @ Ultima [Gaia]',
      },
      {
        href: 'https://steamcommunity.com/id/v__d__',
        title: 'Steam',
        icon: 'https://store.steampowered.com/favicon.ico',
        avatar: 'https://avatars.akamai.steamstatic.com/0d0c956649132e61490fbcab7f314896e4d898ed_full.jpg',
        description: 'Vee',
      },
      {
        title: 'Riot Games',
        icon: 'https://www.riotgames.com/assets/img/meta/ac503221bd36e2fe6d540b0093ab6533/apple-touch-icon-precomposed-76x76.png',
        description: 'Vee#0042',
      },
      {
        title: 'EA Account',
        icon: 'https://www.ea.com/assets/images/favicon.png',
        avatar: 'https://secure.download.dm.origin.com/production/avatar/prod/userAvatar/35955371/208x208.PNG',
        description: 'vee_',
      },
    ],
  },
  {
    id: 'social_links', 
    elements: [
      {
        href: 'https://twitter.com/v__d__',
        icon: 'https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png',
        avatar: 'https://pbs.twimg.com/profile_images/1579838918136328192/7sqoKZ43_400x400.png',
        title: 'X',
        description: '@v__d__',
      },
      {
        href: 'https://mixi.social/@v__d__',
        icon: 'https://mixi.social/_next/static/media/icon_logo_app.edf0e8cf.svg',
        title: 'mixi2',
        description: '@v__d__'
      },
      {
        href: 'https://www.twitch.tv/v__d__',
        icon: 'https://assets.twitch.tv/assets/favicon-32-e29e246c157142c94346.png',
        avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b048a991-aa56-49fd-aa84-e5529b88ae6c-profile_image-70x70.png',
        title: 'Twitch',
        description: 'v__d__',
      },
      {
        href: 'https://www.youtube.com/channel/UCcsSkdDkTTqRuakb7FXL1_Q',
        icon: 'https://www.youtube.com/s/desktop/922a9b3b/img/favicon_32x32.png',
        avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_nN7sowKf-hffI50uuc0cU0o8kNtTU_-ndxmEkI6KUZcA=s160-c-k-c0x00ffffff-no-rj',
        title: 'YouTube',
        description: 'Vee',
      },
      {
        href: 'https://discordapp.com/users/473098215059881984',
        icon: 'https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6266bc493fb42d4e27bb8393_847541504914fd33810e70a0ea73177e.ico',
        avatar: 'https://cdn.discordapp.com/avatars/473098215059881984/137c05215d8b4e0bb68d5d252e776584.webp?size=80',
        title: 'Discord',
        description: 'Vee Dee',
      },
      {
        href: 'https://github.com/veedeeee',
        icon: 'https://github.com/fluidicon.png',
        avatar: 'https://avatars.githubusercontent.com/u/11916394?v=4',
        title: 'GitHub',
        description: 'Vee Dee'
      },
      {
        href: 'https://open.spotify.com/user/xyhljpcjmm16y4t38s4ecx6sp',
        icon: 'https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png',
        avatar: 'https://i.scdn.co/image/ab6775700000ee851c42406ce921da7d2eaead8a',
        title: 'Spotify',
        description: 'Vee',
      }
    ],
  }
].forEach(section => section.elements.forEach(elm => {
  if(!elm.href) return;

  const li = document.createElement('li');
  li.innerHTML = `${elm.title}`;
  if(elm.icon) {
    li.innerHTML = `<a href="${elm.href}"><img alt="${elm.title}" class="avatar" src="${elm.icon}"><p>${li.innerHTML}</p></a>`;
    li.classList.add('with-avatar');
  }

  document.getElementById(section.id).appendChild(li);
}));


[...document.getElementsByTagName('a')].forEach(a => {
  if(!a.href.startsWith('http')) return;
  a.target = '_new';
  a.rel = 'noopener';
});
