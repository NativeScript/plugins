cmake_minimum_required(VERSION 3.10.0)

MESSAGE("## ANDROID_NDK_ROOT: " ${ANDROID_NDK_ROOT})

project(mmkvmetal)

add_subdirectory(../MMKV/Core Core)


include_directories(
        ../MMKV/Core
        ${PROJECT_SOURCE_DIR}/src/main/cpp/include
        ${PROJECT_SOURCE_DIR}/src/main/cpp/include/libc++
)

set(CMAKE_CXX_FLAGS "-std=c++17 -nostdinc++ -Werror -Wno-unused-result -mstackrealign -fexceptions -fno-builtin-stpcpy -fno-rtti -D_LIBCPP_ENABLE_NODISCARD  -D_LIBCPP_ABI_VERSION=Cr -D_LIBCPP_ABI_UNSTABLE -DV8_31BIT_SMIS_ON_64BIT_ARCH -DV8_31BIT_SMIS_ON_64BIT_ARCH -DV8_ENABLE_REGEXP_INTERPRETER_THREADED_DISPATCH -DV8_EMBEDDED_BUILTINS")

add_library(
        mmkvmetal

        SHARED

        src/main/cpp/Bridge.cpp
        src/main/cpp/Caches.cpp
        src/main/cpp/Helpers.cpp
        src/main/cpp/MMKVImpl.cpp
        )

set_target_properties(
        mmkvmetal PROPERTIES
        CXX_STANDARD 17
        CXX_EXTENSIONS OFF
        POSITION_INDEPENDENT_CODE ON
        LINK_FLAGS -Wl,--allow-multiple-definition
)


MESSAGE("# General cmake Info")
MESSAGE("# PROJECT_SOURCE_DIR: " ${PROJECT_SOURCE_DIR})
MESSAGE("# CMAKE_VERSION: " ${CMAKE_VERSION})
MESSAGE("# CMAKE_C_COMPILER_ID: " ${CMAKE_C_COMPILER_ID})
MESSAGE("# CMAKE_CXX_COMPILER_ID: " ${CMAKE_CXX_COMPILER_ID})
MESSAGE("# CMAKE_C_FLAGS: " ${CMAKE_C_FLAGS})
MESSAGE("# CMAKE_CXX_FLAGS: " ${CMAKE_CXX_FLAGS})

find_library(system-log log)
find_library(system-z z)

if ("${ANDROID_ABI}" MATCHES "armeabi-v7a" OR "${ANDROID_ABI}" MATCHES "x86")
  # On API Level 19 and lower we need to link with android_support
  # because it contains some implementation of functions such as "strtoll" and "strtoul"
  target_link_libraries(mmkvmetal
          ${system-log}
          ${system-z}
          ${PROJECT_SOURCE_DIR}/src/main/libs/${ANDROID_ABI}/libv8.a
          ${PROJECT_SOURCE_DIR}/src/main/libs/${ANDROID_ABI}/libzip.a
          ${ANDROID_NDK_ROOT}/sources/cxx-stl/llvm-libc++/libs/${ANDROID_ABI}/libandroid_support.a
          android
          core
          )

else()
  target_link_libraries(mmkvmetal
          ${system-log}
          ${system-z}
          ${PROJECT_SOURCE_DIR}/src/main/libs/${ANDROID_ABI}/libv8.a
          ${PROJECT_SOURCE_DIR}/src/main/libs/${ANDROID_ABI}/libzip.a
          android
          core
          )
endif ()
