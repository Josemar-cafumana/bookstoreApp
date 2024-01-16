import { useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { cn } from "@/lib/utils";
import { genres } from "@/constants";

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchCombo = ({ query, setQuery }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block  p-2.5"
          asChild
        >
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[250px] flex items-center justify-between"
          >
            {query && query != "world"
              ? genres.find((genre) => genre.value === query)?.label
              : "Selectione o gênero..."}

            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Escolha o gênero..." />
            <CommandEmpty>Gênero não encontrado.</CommandEmpty>
            <CommandGroup>
              {genres.map((genre) => (
                <CommandItem
                  key={genre.value}
                  value={genre.value}
                  onSelect={(currentValue) => {
                    setQuery(currentValue === query ? "world" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      query === genre.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {genre.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SearchCombo;
