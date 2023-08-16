import { messageAdapter } from 'features/chat/model/slice'

import { useStore } from 'shared'

const { selectAll } = messageAdapter.getSelectors()

const useGet = () => useStore((state) => state.chat)

const useGetAll = () => useStore(({ chat }) => selectAll(chat))

export const FileNameHooks = {
	useGet,
	useGetAll,
}
