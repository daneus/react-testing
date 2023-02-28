import {
  AddIcon,
  AtSignIcon,
  ChevronRightIcon,
  DeleteIcon,
  DragHandleIcon,
  HamburgerIcon,
  PlusSquareIcon,
  RepeatClockIcon,
} from '@chakra-ui/icons';
import {
  Switch,
  FormLabel,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Select,
  IconButton,
} from '@chakra-ui/react';

const App = () => {
  return (
    <div className='w-screen h-screen bg-slate-400 flex justify-center items-center'>
      <div className='w-[85%] h-[85%] bg-white flex justify-center items-center flex-col relative'>
        <Tabs align='center' className='bg-white w-full h-full'>
          <TabList height={'50px'}>
            <Tab>
              <IconButton aria-label='Cuadro 1' icon={<PlusSquareIcon />} />
            </Tab>
            <Tab>
              <IconButton aria-label='Cuadro 2' icon={<HamburgerIcon />} />
            </Tab>
            <Tab>
              <IconButton aria-label='Cuadro 3' icon={<DragHandleIcon />} />
            </Tab>
            <Tab>
              <IconButton aria-label='Cuadro 4' icon={<RepeatClockIcon />} />
            </Tab>
          </TabList>
          <TabPanels h='calc(100% - 50px)'>
            <TabPanel p={0} h={'100%'}>
              <Flex h={'100%'}>
                <div className='bg-[#E9E9E9] w-[65%]'>
                  <div className='brick h-max flex flex-wrap gap-2 p-2'>
                    <div className='p-2 bg-[#2C8DE3] text-white text-lg font-bold'>
                      Todos
                    </div>
                    <div className='p-2 bg-[#1CB973] text-white text-lg font-bold'>
                      Canastas
                    </div>
                    <div className='p-2 bg-[#BF7AE6] text-white text-lg font-bold'>
                      Lavado
                    </div>
                    <div className='p-2 bg-[#FC6304] text-white text-lg font-bold'>
                      Tratamientos
                    </div>
                    <div className='p-2 bg-[#9B4DB4] text-white text-lg font-bold'>
                      Aromatizadores
                    </div>
                    <div className='p-2 bg-[#77C1F3] text-white text-lg font-bold'>
                      Vinos
                    </div>
                    <div className='p-2 bg-[#1CB973] text-white text-lg font-bold'>
                      Gaseosas
                    </div>
                    <div className='p-2 bg-[#BF7AE6] text-white text-lg font-bold'>
                      Pantalones
                    </div>
                    <div className='p-2 bg-[#FC6304] text-white text-lg font-bold'>
                      Casacas
                    </div>
                    <div className='p-2 bg-[#9B4DB4] text-white text-lg font-bold'>
                      Ropas interiores
                    </div>
                    <div className='p-2 bg-[#77C1F3] text-white text-lg font-bold'>
                      Short
                    </div>
                    <div className='p-2 bg-[#1CB973] text-white text-lg font-bold'>
                      Semillas Hortalizas
                    </div>
                    <div className='p-2 bg-[#BF7AE6] text-white text-lg font-bold'>
                      Medicamento
                    </div>
                  </div>
                </div>
                <div className='segundo-panel bg-[#F8F9FA] grow'>
                  <div className='flex flex-col justify-center items-center h-full'>
                    <div className='busqueda flex w-full gap-3 p-3 border-b-[1px] border-[#AAAAAA]'>
                      <div className='barra grow'>
                        <Select
                          borderColor={'#AAAAAA'}
                          color={'#AAAAAA'}
                          fontSize={'14px'}
                          height={'32px'}
                          borderRadius={'4px'}
                        >
                          <option selected hidden disabled value=''>
                            Cliente
                          </option>
                          <option value='option1'>Test 1</option>
                          <option value='option2'>Test 2</option>
                          <option value='option3'>Test 3</option>
                        </Select>
                      </div>
                      <div className='flex border-[1px] rounded-[4px] border-[#AAAAAA] justify-center items-center gap-4 px-4'>
                        <AddIcon color={'#AAAAAA'}></AddIcon>
                        <DeleteIcon color={'#AAAAAA'}></DeleteIcon>
                        <AtSignIcon color={'#AAAAAA'}></AtSignIcon>
                      </div>
                    </div>
                    <div className='contenido grow'></div>
                    <div className='monto w-full h-[120px] bg-[#343A40] flex justify-between items-center text-white px-24'>
                      <div className='font-bold text-xl'>
                        <ChevronRightIcon></ChevronRightIcon>PAGO
                      </div>
                      <div className='font-bold text-xl'>S/0</div>
                    </div>
                  </div>
                </div>
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <div className='h-[50px] pl-3 absolute top-0 left-0 flex justify-center items-center gap-2'>
          <Switch colorScheme='teal' id='escaner'></Switch>
          <FormLabel htmlFor='escaner' mb='0'>
            Buscar con escáner de código de barras
          </FormLabel>
        </div>
      </div>
    </div>
  );
};

export default App;
