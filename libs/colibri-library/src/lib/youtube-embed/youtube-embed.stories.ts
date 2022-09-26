//  youtube-embed.stories.ts
import { Meta, StoryFn } from '@storybook/html';
import { YoutubeEmbed } from './youtube-embed';

export default {
    title: 'YoutubeEmbed'
} as Meta;

const Template = (args) => {
    const element = document.createElement('youtube-embed');
    element.id = args.id;
    element.title = args.title;
    element.width = args.width;
    element.height = args.height;

    return element;
};

export const Primary: StoryFn = Template.bind({});

Primary.args = {
    id: 'dQw4w9WgXcQ',
    title: 'Rick Astley - Never Gonna Give You Up (Video)',
    width: '600',
    height: '400'
};

//customElements.define("youtube-embed", YoutubeEmbed);
