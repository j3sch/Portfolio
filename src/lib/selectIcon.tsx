import {
	CodeIcon,
	DeviceMobileIcon,
	TemplateIcon,
} from '@heroicons/react/outline';

export default function selectIcon(iconName: string) {
	switch (iconName) {
		case 'CodeIcon':
			return <CodeIcon className="text-[#7c6ff7] w-16 h-16" />;
		case 'DeviceMobileIcon':
			return <DeviceMobileIcon className="text-[#7c6ff7] w-16 h-16" />;
		case 'TemplateIcon':
			return <TemplateIcon className="text-[#7c6ff7] w-16 h-16" />;
	}
}
