<script lang="ts">
  interface Icon {
    name: string;
    svg: string;
    boxSize: string;
  };

  type IconName = 'sticker' | 'house';

  export let size: number = 24;
  export let color: string = '#AE9796';
  export let iconName: IconName = 'sticker'


  const icons: Icon[] = [
    {
      name: 'sticker',
      svg: `<path d="M20.6833 6.25V10.9167C20.6833 11.8003 19.967 12.5167 19.0833 12.5167H17.9167C15.5787 12.5167 13.6833 14.412 13.6833 16.75V19.0833C13.6833 19.967 12.967 20.6833 12.0833 20.6833H6.25C4.07768 20.6833 2.31667 18.9223 2.31667 16.75V6.25C2.31667 4.07768 4.07768 2.31667 6.25 2.31667H16.75C18.9223 2.31667 20.6833 4.07768 20.6833 6.25ZM19.0833 13.9833C19.6136 13.9833 20.1127 13.8486 20.548 13.6116C19.9979 16.6791 17.8207 19.1828 14.9415 20.197C15.0761 19.8517 15.15 19.476 15.15 19.0833V16.75C15.15 15.222 16.3887 13.9833 17.9167 13.9833H19.0833ZM16.75 0.85H6.25C3.26766 0.85 0.85 3.26766 0.85 6.25V16.75C0.85 19.7323 3.26766 22.15 6.25 22.15H12.0833C17.643 22.15 22.15 17.643 22.15 12.0833V6.25C22.15 3.26766 19.7323 0.85 16.75 0.85Z" fill="${color}" stroke="${color}" stroke-width="0.3"/>`,
      boxSize: '0 0 23 23'
    }, 
    {
      name: 'house',
      svg: `<path d="M18 7.84375H0V21H18V7.84375Z" fill="#F1E9D4"/>
        <path d="M0 7.84377H18L9.56761 0L0 7.84377Z" fill="#E8D591"/>
        <path d="M7.86489 11.0557H4.82739V14.4235H7.86489V11.0557Z" fill="#7C4C49"/>
        <path d="M15.9187 14.0439H11.429V21.0005H15.9187V14.0439Z" fill="#7C4C49"/>`,
      boxSize: '0 0 18 21'
    }
  ];

  let icon: Icon = icons.find(svg => svg.name === iconName);

</script>

<svg class={$$props.class} viewBox={icon.boxSize} width={size} height='auto'>
  {
    @html icon.svg
  }
</svg>

