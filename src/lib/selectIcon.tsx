import { ReactNode } from 'react';

import {
	CodeBracketIcon,
	DevicePhoneMobileIcon,
	RectangleGroupIcon,
} from '@heroicons/react/24/outline';

export default function selectIcon(iconName: string): ReactNode {
	switch (iconName) {
		case 'CodeIcon':
			return <CodeBracketIcon className="text-[#7c6ff7] w-16 h-16" />;
		case 'DeviceMobileIcon':
			return <DevicePhoneMobileIcon className="text-[#7c6ff7] w-16 h-16" />;
		case 'TemplateIcon':
			return <RectangleGroupIcon className="text-[#7c6ff7] w-16 h-16" />;
		default:
			return <div>No icon with this name</div>;
	}
}
