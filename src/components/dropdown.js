import { Menu } from '@headlessui/react'

function MyDropdown() {
  return (
    <Menu>
        <div className="bg-red-500">
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <div className='flex flex-col'>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
        </div>
      </Menu.Items>
      </div>
    </Menu>
  )
}
export default MyDropdown


