import DropdownMenu from "tailus-ui/DropdownMenu";
import Button from "tailus-ui/Button";
import { Pencil1Icon, DotsVerticalIcon, DownloadIcon, ArchiveIcon, TrashIcon, FileIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export const Menu = () => {
    return(
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button icon="only" variant="ghost" colorVariant="gray" >
                    <DotsVerticalIcon aria-hidden />
                </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={5}>
                    <DropdownMenu.Item>
                        <DropdownMenu.Icon>
                        <Pencil1Icon/>
                        </DropdownMenu.Icon>
                        Edit
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <DropdownMenu.Icon>
                        <FileIcon/>
                        </DropdownMenu.Icon>
                        Duplicate
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator/>
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>
                            <DownloadIcon/>
                            Download
                            <DropdownMenu.RightIcon>
                                <ChevronRightIcon/>
                            </DropdownMenu.RightIcon>
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent sideOffset={4} alignOffset={-5}>
                              <DropdownMenu.Item>Logomark </DropdownMenu.Item>
                              <DropdownMenu.Item>Logotype </DropdownMenu.Item>
                              <DropdownMenu.Separator/>
                              <DropdownMenu.Item>All </DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                    <DropdownMenu.Item disabled>
                        <DropdownMenu.Icon>
                        <ArchiveIcon/>
                        </DropdownMenu.Icon>
                        Archive
                    </DropdownMenu.Item>
                    <DropdownMenu.Item intent="danger">
                        <DropdownMenu.Icon>
                        <TrashIcon/>
                        </DropdownMenu.Icon>
                        Delete
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}