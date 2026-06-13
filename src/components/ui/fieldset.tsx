import { Fieldset as BaseFieldset } from '@base-ui/react/fieldset';
import { cn } from '~/lib/utils';

export const Fieldset = ({ className, ...props }: BaseFieldset.Root.Props) => {
	return <BaseFieldset.Root className={cn('', className)} {...props} />;
};

export const FieldsetLegend = ({
	className,
	...props
}: BaseFieldset.Legend.Props) => {
	return (
		<BaseFieldset.Legend
			className={cn('', className)}
			render={<legend />}
			{...props}
		/>
	);
};
