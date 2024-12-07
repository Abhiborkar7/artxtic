import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LabelInputContainer } from "./LabelInputContainer";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export const MobileNumberInput = ({
  countryCode,
  setCountryCode,
  phoneNumber,
  setPhoneNumber,
}: {
  countryCode: string;
  setCountryCode: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    // <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 ">
    <LabelInputContainer className="mb-4 mt-0 flex flex-row items-start justify-start">

      <div></div>
      <div className="self-start ">
        <Label htmlFor="country-code" className="text-neutral-200 m-0">
          Country Code
        </Label>
        <Select value={countryCode} onValueChange={setCountryCode}>
          <SelectTrigger className=" border-none  min-w-[8rem]  bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm transition duration-400">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent className="" >
            <SelectGroup>
              <SelectLabel>Country Codes</SelectLabel>
              <SelectItem value="1">🇺🇸 +1</SelectItem>
              <SelectItem value="7">🇷🇺 +7</SelectItem>
              <SelectItem value="20">🇪🇬 +20</SelectItem>
              <SelectItem value="27">🇿🇦 +27</SelectItem>
              <SelectItem value="30">🇬🇷 +30</SelectItem>
              <SelectItem value="32">🇧🇪 +32</SelectItem>
              <SelectItem value="33">🇫🇷 +33</SelectItem>
              <SelectItem value="34">🇪🇸 +34</SelectItem>
              <SelectItem value="39">🇮🇹 +39</SelectItem>
              <SelectItem value="41">🇨🇭 +41</SelectItem>
              <SelectItem value="44">🇬🇧 +44</SelectItem>
              <SelectItem value="45">🇩🇰 +45</SelectItem>
              <SelectItem value="46">🇸🇪 +46</SelectItem>
              <SelectItem value="48">🇵🇱 +48</SelectItem>
              <SelectItem value="49">🇩🇪 +49</SelectItem>
              <SelectItem value="51">🇵🇪 +51</SelectItem>
              <SelectItem value="52">🇲🇽 +52</SelectItem>
              <SelectItem value="53">🇨🇺 +53</SelectItem>
              <SelectItem value="54">🇦🇷 +54</SelectItem>
              <SelectItem value="55">🇧🇷 +55</SelectItem>
              <SelectItem value="60">🇲🇾 +60</SelectItem>
              <SelectItem value="61">🇦🇺 +61</SelectItem>
              <SelectItem value="62">🇮🇩 +62</SelectItem>
              <SelectItem value="63">🇵🇭 +63</SelectItem>
              <SelectItem value="64">🇳🇿 +64</SelectItem>
              <SelectItem value="66">🇹🇭 +66</SelectItem>
              <SelectItem value="81">🇯🇵 +81</SelectItem>
              <SelectItem value="82">🇰🇷 +82</SelectItem>
              <SelectItem value="91">🇮🇳 +91</SelectItem>
              <SelectItem value="92">🇵🇰 +92</SelectItem>
              <SelectItem value="95">🇲🇲 +95</SelectItem>
              <SelectItem value="96">🇹🇿 +96</SelectItem>
              <SelectItem value="97">🇶🇦 +97</SelectItem>
              <SelectItem value="971">🇦🇪 +971</SelectItem>
              <SelectItem value="972">🇮🇱 +972</SelectItem>
              <SelectItem value="973">🇧🇭 +973</SelectItem>
              <SelectItem value="974">🇶🇦 +974</SelectItem>
              <SelectItem value="975">🇧🇹 +975</SelectItem>
              <SelectItem value="977">🇳🇵 +977</SelectItem>
              <SelectItem value="992">🇹🇯 +992</SelectItem>
              <SelectItem value="994">🇦🇿 +994</SelectItem>
              <SelectItem value="995">🇬🇪 +995</SelectItem>
              <SelectItem value="996">🇰🇬 +996</SelectItem>
              <SelectItem value="998">🇺🇿 +998</SelectItem>
              <SelectItem value="230">🇲🇺 +230</SelectItem>
              <SelectItem value="233">🇬🇭 +233</SelectItem>
              <SelectItem value="239">🇸🇹 +239</SelectItem>
              <SelectItem value="250">🇷🇼 +250</SelectItem>
              <SelectItem value="254">🇰🇪 +254</SelectItem>
              <SelectItem value="256">🇺🇬 +256</SelectItem>
              <SelectItem value="257">🇧🇮 +257</SelectItem>
              <SelectItem value="264">🇳🇦 +264</SelectItem>
              <SelectItem value="266">🇱🇸 +266</SelectItem>
              <SelectItem value="375">🇧🇾 +375</SelectItem>
              <SelectItem value="380">🇺🇦 +380</SelectItem>
              <SelectItem value="383">🇽🇰 +383</SelectItem>
              <SelectItem value="420">🇨🇿 +420</SelectItem>
              <SelectItem value="423">🇱🇮 +423</SelectItem>
              <SelectItem value="855">🇰🇭 +855</SelectItem>
              <SelectItem value="961">🇱🇧 +961</SelectItem>
              <SelectItem value="963">🇸🇾 +963</SelectItem>
              <SelectItem value="966">🇸🇦 +966</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>

      </div>

      <div className="flex-grow ml-5" >
        <Label htmlFor="phone-number" className="m-0 text-neutral-200">
          Phone Number
        </Label>
        <Input
          id="phone-number"
          className="m-0"
          placeholder="7878787878"
          type="text"
          value={phoneNumber}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, "");
            if (value.length <= 10) {
              setPhoneNumber(value);
            }
          }}
          maxLength={10}
        />
      </div>

    </LabelInputContainer>

    // </div>
  );
};