export const Container: FC = ({ children }) => {
	return <div className={'w-[clamp(100px,100%,700px)] py-10 h-full'}>{children}</div>
}
